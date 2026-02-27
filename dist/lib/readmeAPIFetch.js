import path from 'node:path';
import mime from 'mime-types';
import { ProxyAgent } from 'undici';
import { APIv1Error, APIv2Error } from './apiError.js';
import config from './config.js';
import { getPkgVersion } from './getPkg.js';
import { git } from './git.js';
import isCI, { ciName, isGHA } from './isCI.js';
import { debug, warn } from './logger.js';
import readmeAPIv2Oas from './types/openapiDoc.js';
const SUCCESS_NO_CONTENT = 204;
function getProxy() {
    // this is something of an industry standard env var, hence the checks for different casings
    return process.env.HTTPS_PROXY || process.env.https_proxy;
}
function stripQuotes(s) {
    if (!s)
        return '';
    return s.replace(/(^"|[",]*$)/g, '');
}
export const emptyMappings = { categories: {}, parentPages: {} };
/**
 * Parses Warning header into an array of warning header objects
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Warning}
 * @see {@link https://www.rfc-editor.org/rfc/rfc7234#section-5.5}
 * @see {@link https://github.com/marcbachmann/warning-header-parser}
 */
function parseWarningHeader(
/** The raw `Warning` header string */
header) {
    try {
        const warnings = header.split(/([0-9]{3} [a-z0-9.@\-/]*) /g);
        let previous;
        return warnings.reduce((all, w) => {
            // biome-ignore lint/style/noParameterAssign: We need to mutate this variable for reducing.
            w = w.trim();
            const newError = w.match(/^([0-9]{3}) (.*)/);
            if (newError) {
                previous = { code: newError[1], agent: newError[2], message: '' };
            }
            else if (w) {
                const errorContent = w.split(/" "/);
                if (errorContent) {
                    previous.message = stripQuotes(errorContent[0]);
                    previous.date = stripQuotes(errorContent[1]);
                    all.push(previous);
                }
            }
            return all;
        }, []);
    }
    catch (e) {
        debug(`error parsing warning header: ${e.message}`);
        return [{ code: '199', agent: '-', message: header }];
    }
}
/**
 * Getter function for a string to be used in the user-agent header based on the current
 * environment. Used for API v1 requests.
 *
 */
export function getUserAgent() {
    const gh = isGHA() ? '-github' : '';
    return `rdme${gh}/${getPkgVersion()}`;
}
/**
 * Creates a relative path for the file from the root of the repo,
 * otherwise returns the path
 */
async function normalizeFilePath(opts) {
    if (opts.fileType === 'path') {
        const repoRoot = await git.revparse(['--show-toplevel']).catch(e => {
            debug(`[fetch] error grabbing git root: ${e.message}`);
            return '';
        });
        return path.relative(repoRoot, opts.filePath);
    }
    return opts.filePath;
}
/**
 * Sanitizes and stringifies the `Headers` object for logging purposes
 */
function sanitizeHeaders(headers) {
    const raw = Array.from(headers.entries()).reduce((prev, current) => {
        prev[current[0]] = current[0].toLowerCase() === 'authorization' ? 'redacted' : current[1];
        return prev;
    }, {});
    return JSON.stringify(raw);
}
/**
 * Wrapper for the `fetch` API so we can add rdme-specific headers to all ReadMe API v1 requests.
 *
 * @deprecated This is for APIv1 only. Use {@link readmeAPIv2Fetch} instead, if possible.
 */
export async function readmeAPIv1Fetch(
/** The pathname to make the request to. Must have a leading slash. */
pathname, options = { headers: new Headers() }, 
/** optional object containing information about the file being sent.
 * We use this to construct a full source URL for the file. */
fileOpts = { filePath: '', fileType: false }) {
    let source = 'cli';
    let headers = options.headers;
    if (!(options.headers instanceof Headers)) {
        headers = new Headers(options.headers);
    }
    headers.set('User-Agent', getUserAgent());
    if (isGHA()) {
        source = 'cli-gh';
        if (process.env.GITHUB_REPOSITORY)
            headers.set('x-github-repository', process.env.GITHUB_REPOSITORY);
        if (process.env.GITHUB_RUN_ATTEMPT)
            headers.set('x-github-run-attempt', process.env.GITHUB_RUN_ATTEMPT);
        if (process.env.GITHUB_RUN_ID)
            headers.set('x-github-run-id', process.env.GITHUB_RUN_ID);
        if (process.env.GITHUB_RUN_NUMBER)
            headers.set('x-github-run-number', process.env.GITHUB_RUN_NUMBER);
        if (process.env.GITHUB_SHA)
            headers.set('x-github-sha', process.env.GITHUB_SHA);
        const filePath = await normalizeFilePath(fileOpts);
        if (filePath) {
            /**
             * Constructs a full URL to the file using GitHub Actions runner variables
             * @see {@link https://docs.github.com/en/actions/learn-github-actions/environment-variables#default-environment-variables}
             * @example https://github.com/step-security/rdme/blob/v10/documentation/rdme.md
             */
            try {
                const sourceUrl = new URL(`${process.env.GITHUB_SERVER_URL}/${process.env.GITHUB_REPOSITORY}/blob/${process.env.GITHUB_SHA}/${filePath}`).href;
                headers.set('x-readme-source-url', sourceUrl);
            }
            catch (e) {
                debug(`error constructing github source url: ${e.message}`);
            }
        }
    }
    if (isCI()) {
        headers.set('x-rdme-ci', ciName());
    }
    headers.set('x-readme-source', source);
    if (fileOpts.filePath && fileOpts.fileType === 'url') {
        headers.set('x-readme-source-url', fileOpts.filePath);
    }
    const fullUrl = `${config.host.v1}${pathname}`;
    const proxy = getProxy();
    debug(`making ${(options.method || 'get').toUpperCase()} request to ${fullUrl} ${proxy ? `with proxy ${proxy} and ` : ''}with headers: ${sanitizeHeaders(headers)}`);
    return fetch(fullUrl, {
        ...options,
        headers,
        // @ts-expect-error we need to clean up our undici usage here ASAP
        dispatcher: proxy ? new ProxyAgent(proxy) : undefined,
    })
        .then(res => {
        const warningHeader = res.headers.get('Warning');
        if (warningHeader) {
            debug(`received warning header: ${warningHeader}`);
            const warnings = parseWarningHeader(warningHeader);
            warnings.forEach(warning => {
                warn(warning.message, 'ReadMe API Warning:');
            });
        }
        return res;
    })
        .catch(e => {
        debug(`error making fetch request: ${e}`);
        throw e;
    });
}
/**
 * Wrapper for the `fetch` API so we can add rdme-specific headers to all ReadMe API v2 requests.
 */
export async function readmeAPIv2Fetch(
/** The pathname to make the request to. Must have a leading slash. */
pathname, options = { headers: new Headers() }, 
/** optional object containing information about the file being sent.
 * We use this to construct a full source URL for the file. */
fileOpts = { filePath: '', fileType: false }) {
    let source = 'cli';
    let headers = options.headers;
    if (!(options.headers instanceof Headers)) {
        headers = new Headers(options.headers);
    }
    headers.set('User-Agent', this.config.userAgent.replace(this.config.name, `${this.config.name}${isGHA() ? '-github' : ''}`));
    if (!headers.get('accept')) {
        headers.set('accept', 'application/json');
    }
    if (isGHA()) {
        source = 'cli-gh';
        if (process.env.GITHUB_REPOSITORY)
            headers.set('x-github-repository', process.env.GITHUB_REPOSITORY);
        if (process.env.GITHUB_RUN_ATTEMPT)
            headers.set('x-github-run-attempt', process.env.GITHUB_RUN_ATTEMPT);
        if (process.env.GITHUB_RUN_ID)
            headers.set('x-github-run-id', process.env.GITHUB_RUN_ID);
        if (process.env.GITHUB_RUN_NUMBER)
            headers.set('x-github-run-number', process.env.GITHUB_RUN_NUMBER);
        if (process.env.GITHUB_SHA)
            headers.set('x-github-sha', process.env.GITHUB_SHA);
        const filePath = await normalizeFilePath(fileOpts);
        if (filePath) {
            /**
             * Constructs a full URL to the file using GitHub Actions runner variables
             * @see {@link https://docs.github.com/en/actions/learn-github-actions/environment-variables#default-environment-variables}
             * @example https://github.com/step-security/rdme/blob/v10/documentation/rdme.md
             */
            try {
                const sourceUrl = new URL(`${process.env.GITHUB_SERVER_URL}/${process.env.GITHUB_REPOSITORY}/blob/${process.env.GITHUB_SHA}/${filePath}`).href;
                headers.set('x-readme-source-url', sourceUrl);
            }
            catch (e) {
                this.debug(`error constructing github source url: ${e.message}`);
            }
        }
    }
    if (isCI()) {
        headers.set('x-rdme-ci', ciName());
    }
    headers.set('x-readme-source', source);
    if (fileOpts.filePath && fileOpts.fileType === 'url') {
        headers.set('x-readme-source-url', fileOpts.filePath);
    }
    const fullUrl = `${config.host.v2}${pathname}`;
    const proxy = getProxy();
    this.debug(`making ${(options.method || 'get').toUpperCase()} request to ${fullUrl} ${proxy ? `with proxy ${proxy} and ` : ''}with headers: ${sanitizeHeaders(headers)}`);
    return fetch(fullUrl, {
        ...options,
        headers,
        // @ts-expect-error we need to clean up our undici usage here ASAP
        dispatcher: proxy ? new ProxyAgent(proxy) : undefined,
    })
        .then(res => {
        const warningHeader = res.headers.get('Warning');
        if (warningHeader) {
            this.debug(`received warning header: ${warningHeader}`);
            const warnings = parseWarningHeader(warningHeader);
            warnings.forEach(warning => {
                this.warn(`⚠️ ReadMe API Warning: ${warning.message}`);
            });
        }
        return res;
    })
        .catch(e => {
        this.debug(`error making fetch request: ${e}`);
        this.debug(e.stack);
        throw e;
    });
}
/**
 * Small handler for handling responses from ReadMe API v1.
 *
 * If we receive JSON errors, we throw an APIv1Error exception.
 *
 * If we receive non-JSON responses, we consider them errors and throw them.
 *
 * @deprecated This is for APIv1 only. Use {@link handleAPIv2Res} instead, if possible.
 */
export async function handleAPIv1Res(res, 
/**
 * If omitted (or set to true), the function will return an `APIv1Error`
 * if the JSON body contains an `error` property. If set to false,
 * the function will return a resolved promise containing the JSON object.
 */
rejectOnJsonError = true) {
    const contentType = res.headers.get('content-type') || '';
    const extension = mime.extension(contentType);
    debug(`received status code ${res.status} from ${res.url} with content type: ${contentType}`);
    if (extension === 'json') {
        // Just to be safe, we parse the response as text first in case the response is not valid JSON.
        const text = await res.text();
        debug(`received status code ${res.status} from ${res.url} with JSON response: ${text}`);
        try {
            // biome-ignore lint/suspicious/noExplicitAny: We do not have TS types for APIv1 responses.
            const body = JSON.parse(text);
            if (body.error && rejectOnJsonError) {
                throw new APIv1Error(body);
            }
            return body;
        }
        catch (e) {
            if (e instanceof APIv1Error) {
                throw e;
            }
            debug(`received the following error when attempting to parse JSON response: ${e.message}`);
            throw new Error('The ReadMe API responded with an unexpected error. Please try again and if this issue persists, get in touch with us at support@readme.io.');
        }
    }
    if (res.status === SUCCESS_NO_CONTENT) {
        debug(`received status code ${res.status} from ${res.url} with no content`);
        return {};
    }
    // If we receive a non-JSON response, it's likely an error.
    // Let's debug the raw response body and throw it.
    const body = await res.text();
    debug(`received status code ${res.status} from ${res.url} with non-JSON response: ${body}`);
    return Promise.reject(body);
}
/**
 * Small handler for handling responses from ReadMe API v2.
 *
 * If we receive JSON errors, we throw an APIError exception.
 *
 * If we receive non-JSON responses, we consider them errors and throw them.
 */
export async function handleAPIv2Res(res) {
    const contentType = res.headers.get('content-type') || '';
    const extension = mime.extension(contentType) || contentType.includes('json') ? 'json' : false;
    this.debug(`received status code ${res.status} from ${res.url} with content type: ${contentType}`);
    if (res.status === SUCCESS_NO_CONTENT) {
        // to prevent a memory leak, we should still consume the response body? even though we don't use it?
        // https://x.com/cramforce/status/1762142087930433999
        const body = await res.text();
        this.debug(`received status code ${res.status} from ${res.url} with no content: ${body}`);
        return {};
    }
    else if (extension === 'json') {
        // Just to be safe, we parse the response as text first in case the response is not valid JSON.
        const text = await res.text();
        this.debug(`received status code ${res.status} from ${res.url} with JSON response: ${text}`);
        try {
            const body = JSON.parse(text);
            if (!res.ok) {
                throw new APIv2Error(body);
            }
            return body;
        }
        catch (e) {
            if (e instanceof APIv2Error) {
                throw e;
            }
            this.debug(`received the following error when attempting to parse JSON response: ${e.message}`);
            throw new Error('The ReadMe API responded with an unexpected error. Please try again and if this issue persists, get in touch with us at support@readme.io.');
        }
    }
    // If we receive a non-JSON response, it's likely an error.
    // Let's debug the raw response body and throw it.
    const body = await res.text();
    this.debug(`received status code ${res.status} from ${res.url} with non-JSON response: ${body}`);
    throw new Error('The ReadMe API responded with an unexpected error. Please try again and if this issue persists, get in touch with us at support@readme.io.');
}
/**
 * If you supply `undefined` or `null` to the `Headers` API,
 * it'll convert those to a string by default,
 * so we instead filter those out here.
 */
function filterOutFalsyHeaders(inputHeaders) {
    const headers = new Headers();
    for (const header of inputHeaders.entries()) {
        if (header[1] !== 'null' && header[1] !== 'undefined' && header[1].length > 0) {
            headers.set(header[0], header[1]);
        }
    }
    return headers;
}
/**
 * Returns the basic auth header and any other defined headers for use in `fetch` calls against ReadMe API v1.
 *
 * @deprecated This is for APIv1 only.
 */
export function cleanAPIv1Headers(key, 
/** used for `x-readme-header` */
version, headers = new Headers()) {
    const encodedKey = Buffer.from(`${key}:`).toString('base64');
    headers.set('Authorization', `Basic ${encodedKey}`);
    if (version) {
        headers.set('x-readme-version', version);
    }
    return filterOutFalsyHeaders(headers);
}
/**
 * Fetches the category and parent page mappings from the ReadMe API.
 * Used for migrating frontmatter in Guides pages to the new API v2 format.
 */
export async function fetchMappings() {
    if (!this.flags.key) {
        this.debug('no API key provided, skipping mappings fetch');
        return emptyMappings;
    }
    const mappings = await readmeAPIv1Fetch('/api/v1/migration', {
        method: 'get',
        headers: cleanAPIv1Headers(this.flags.key, undefined, new Headers({ Accept: 'application/json' })),
    })
        .then(res => {
        if (!res.ok) {
            this.debug(`received the following error when attempting to fetch mappings: ${res.status}`);
            return emptyMappings;
        }
        this.debug('received a successful response when fetching mappings');
        return res.json();
    })
        .catch(e => {
        this.debug(`error fetching mappings: ${e}`);
        return emptyMappings;
    });
    return mappings;
}
/**
 * Fetches the schema for the current route from the OpenAPI description for ReadMe API v2.
 */
export function fetchSchema() {
    const oasPath = this.route === 'changelogs' ? '/changelogs/{identifier}' : `/branches/{branch}/${this.route}/{slug}`;
    return readmeAPIv2Oas.paths[oasPath].patch.requestBody.content['application/json'].schema;
}
