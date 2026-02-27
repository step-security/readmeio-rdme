import path from 'node:path';
import chalk from 'chalk';
import ora from 'ora';
import toposort from 'toposort';
import { APIv2Error } from './apiError.js';
import { oraOptions } from './logger.js';
import { allowedMarkdownExtensions, findPages } from './readPage.js';
import { categoryUriRegexPattern, parentUriRegexPattern } from './types/index.js';
import { validateFrontmatter } from './validateFrontmatter.js';
/**
 * Reads the contents of the specified Markdown or HTML file
 * and creates/updates the corresponding page in ReadMe
 */
async function pushPage(
/** the file data */
fileData) {
    const { key, 'dry-run': dryRun } = this.flags;
    const { content, filePath, slug } = fileData;
    const data = fileData.data;
    let route = `/${this.route}`;
    // the changelog route is not versioned
    const branch = this.route === 'changelogs' ? null : this.flags.branch;
    if (branch) {
        route = `/branches/${branch}${route}`;
    }
    const headers = new Headers({ authorization: `Bearer ${key}`, 'Content-Type': 'application/json' });
    if (!Object.keys(data).length) {
        this.debug(`No frontmatter attributes found for ${filePath}, not syncing`);
        return { filePath, result: 'skipped', slug };
    }
    let payload = {
        ...data,
        content: {
            body: content,
            ...(typeof data.content === 'object' ? data.content : {}),
        },
        slug,
    };
    try {
        // normalize the category uri
        if ('category' in payload && payload.category?.uri) {
            const regex = new RegExp(categoryUriRegexPattern);
            if (!regex.test(payload.category.uri)) {
                let uri = payload.category.uri;
                this.debug(`normalizing category uri ${uri} for ${filePath}`);
                // remove leading and trailing slashes
                uri = uri.replace(/^\/|\/$/g, '');
                payload.category.uri = `/branches/${branch}/categories/${this.route}/${uri}`;
            }
        }
        // normalize the parent uri
        if ('parent' in payload && payload.parent?.uri) {
            const regex = new RegExp(parentUriRegexPattern);
            if (!regex.test(payload.parent.uri)) {
                let uri = payload.parent.uri;
                this.debug(`normalizing parent uri ${uri} for ${filePath}`);
                // remove leading and trailing slashes
                uri = uri.replace(/^\/|\/$/g, '');
                payload.parent.uri = `/branches/${branch}/${this.route}/${uri}`;
            }
        }
        if (this.route === 'custom_pages') {
            const customPagePayload = structuredClone(payload);
            const type = path.extname(filePath).toLowerCase() === '.html' ? 'html' : 'markdown';
            if (typeof customPagePayload.content === 'object' && customPagePayload.content) {
                customPagePayload.content.type = type;
            }
            else {
                customPagePayload.content = { type };
            }
            payload = customPagePayload;
        }
        const createPage = () => {
            if (dryRun) {
                return { filePath, response: null, result: 'created', slug };
            }
            return this.readmeAPIFetch(route, { method: 'POST', headers, body: JSON.stringify(payload) }, { filePath, fileType: 'path' })
                .then(res => this.handleAPIRes(res))
                .then(res => {
                return { filePath, response: res?.data || {}, result: 'created', slug };
            });
        };
        const updatePage = () => {
            if (dryRun) {
                return { filePath, response: null, result: 'updated', slug };
            }
            // omits the slug from the PATCH payload since this would lead to unexpected behavior
            delete payload.slug;
            return this.readmeAPIFetch(`${route}/${slug}`, {
                method: 'PATCH',
                headers,
                body: JSON.stringify(payload),
            }, { filePath, fileType: 'path' })
                .then(res => this.handleAPIRes(res))
                .then(res => {
                return { filePath, response: res?.data || {}, result: 'updated', slug };
            });
        };
        return this.readmeAPIFetch(`${route}/${slug}`, {
            method: 'GET',
            headers,
        }).then(async (res) => {
            if (!res.ok) {
                if (res.status !== 404) {
                    return this.handleAPIRes(res);
                }
                this.debug(`error retrieving data for ${slug}, creating page`);
                return createPage();
            }
            this.debug(`data received for ${slug}, updating page`);
            return updatePage();
        });
    }
    catch (e) {
        return { error: e, filePath, result: 'failed', slug };
    }
}
const byParentPage = (left, right) => {
    return (right.data.parent?.uri ? 1 : 0) - (left.data.parent?.uri ? 1 : 0);
};
/**
 * Sorts files based on their `parent.uri` attribute. If a file has a `parent.uri` attribute,
 * it will be sorted after the file it references.
 *
 * @returns An array of sorted PageMetadata objects
 */
function sortFiles(files) {
    const filesBySlug = files.reduce((bySlug, obj) => {
        bySlug[obj.slug] = obj;
        return bySlug;
    }, {});
    const dependencies = Object.values(filesBySlug).reduce((edges, obj) => {
        if (obj.data.parent?.uri && filesBySlug[obj.data.parent.uri]) {
            edges.push([filesBySlug[obj.data.parent.uri], filesBySlug[obj.slug]]);
        }
        return edges;
    }, []);
    return toposort.array(files, dependencies);
}
/**
 * Takes a path (either to a directory of files or to a single file)
 * and syncs those (either via POST or PATCH) to ReadMe.
 * @returns An array of objects with the results
 */
export default async function syncPagePath() {
    const { path: pathInput } = this.args;
    const { 'dry-run': dryRun, 'max-errors': maxErrors, 'skip-validation': skipValidation } = this.flags;
    const validFileExtensions = [...allowedMarkdownExtensions];
    if (this.route === 'custom_pages') {
        validFileExtensions.push('.html');
    }
    let unsortedFiles = await findPages.call(this, pathInput, validFileExtensions);
    if (skipValidation) {
        this.warn('Skipping pre-upload validation of the Markdown file(s). This is not recommended.');
    }
    else {
        const validationResults = await validateFrontmatter.call(this, unsortedFiles);
        // if autofixes were applied, we return the results immediately
        if (validationResults.status.includes('autofixed')) {
            return {
                created: [],
                updated: [],
                skipped: validationResults.pages.map(page => ({
                    filePath: page.filePath,
                    result: 'skipped',
                    slug: page.slug,
                })),
                failed: [],
            };
        }
        unsortedFiles = validationResults.pages;
    }
    const uploadSpinner = ora({ ...oraOptions() }).start(dryRun
        ? "🎭 Uploading files to ReadMe (but not really because it's a dry run)..."
        : '🚀 Uploading files to ReadMe...');
    const count = { succeeded: 0, failed: 0 };
    // topological sort the files
    const sortedFiles = this.route === 'changelogs' || this.route === 'custom_pages'
        ? unsortedFiles
        : sortFiles(unsortedFiles.sort(byParentPage));
    // push the files to ReadMe
    const rawResults = [];
    for await (const fileData of sortedFiles) {
        try {
            const res = await pushPage.call(this, fileData);
            rawResults.push({
                status: 'fulfilled',
                value: res,
            });
            count.succeeded += 1;
        }
        catch (err) {
            rawResults.push({
                status: 'rejected',
                reason: err,
            });
            count.failed += 1;
        }
        finally {
            uploadSpinner.suffixText = `(${count.succeeded} succeeded, ${count.failed} failed)`;
        }
    }
    const results = rawResults.reduce((acc, result, index) => {
        if (result.status === 'fulfilled') {
            const pushResult = result.value;
            if (pushResult.result === 'created') {
                acc.created.push(pushResult);
            }
            else if (pushResult.result === 'updated') {
                acc.updated.push(pushResult);
            }
            else if (pushResult.result === 'failed') {
                acc.failed.push(pushResult);
            }
            else {
                acc.skipped.push(pushResult);
            }
        }
        else {
            // we're ignoring these ones for now since errors are handled in the catch block
            acc.failed.push({
                error: result.reason,
                filePath: sortedFiles[index].filePath,
                result: 'failed',
                slug: sortedFiles[index].slug,
            });
        }
        return acc;
    }, { created: [], updated: [], skipped: [], failed: [] });
    uploadSpinner.suffixText = '';
    if (results.failed.length) {
        uploadSpinner.fail(`${uploadSpinner.text} ${results.failed.length} file(s) failed.`);
    }
    else {
        uploadSpinner.succeed(`${uploadSpinner.text} done!`);
    }
    if (results.created.length) {
        this.log(dryRun
            ? `🌱 The following ${results.created.length} page(s) do not currently exist in ReadMe and will be created:`
            : `🌱 Successfully created ${results.created.length} page(s) in ReadMe:`);
        results.created.forEach(({ filePath, slug }) => {
            this.log(`   - ${slug} (${chalk.underline(filePath)})`);
        });
    }
    if (results.updated.length) {
        this.log(dryRun
            ? `🔄 The following ${results.updated.length} page(s) already exist in ReadMe and will be updated:`
            : `🔄 Successfully updated ${results.updated.length} page(s) in ReadMe:`);
        results.updated.forEach(({ filePath, slug }) => {
            this.log(`   - ${slug} (${chalk.underline(filePath)})`);
        });
    }
    if (results.skipped.length) {
        this.log(dryRun
            ? `⏭️ The following ${results.skipped.length} page(s) will be skipped due to no frontmatter data:`
            : `⏭️ Skipped ${results.skipped.length} page(s) in ReadMe due to no frontmatter data:`);
        results.skipped.forEach(({ filePath, slug }) => {
            this.log(`   - ${slug} (${chalk.underline(filePath)})`);
        });
    }
    if (results.failed.length) {
        this.log(dryRun
            ? `🚨 Unable to fetch data about the following ${results.failed.length} page(s):`
            : `🚨 Received errors when attempting to upload ${results.failed.length} page(s):`);
        results.failed.forEach(({ error, filePath }) => {
            let errorMessage = error.message || 'unknown error';
            if (error instanceof APIv2Error && error.response.title) {
                errorMessage = error.response.title;
            }
            this.log(`   - ${chalk.underline(filePath)}: ${errorMessage}`);
        });
        if (results.failed.length >= maxErrors && maxErrors !== -1) {
            if (results.failed.length === 1) {
                throw results.failed[0].error;
            }
            else {
                const errors = results.failed.map(({ error }) => error);
                throw new AggregateError(errors, dryRun
                    ? `Multiple dry runs failed. To see more detailed errors for a page, run \`${this.config.bin} ${this.id} <path-to-page.md>\` --dry-run.`
                    : `Multiple page uploads failed. To see more detailed errors for a page, run \`${this.config.bin} ${this.id} <path-to-page.md>\`.`);
            }
        }
    }
    return results;
}
