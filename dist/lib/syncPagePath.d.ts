import type { APIv2PageUploadCommands } from '../index.js';
import type { PageResponseSchema } from './types/index.js';
import { APIv2Error } from './apiError.js';
type PageResponseRepresentation = PageResponseSchema<'changelogs' | 'custom_pages' | 'guides' | 'reference'>['data'];
interface BasePushResult {
    filePath: string;
    /**
     * The result of the upload operation.
     * - `created`: The page was created in ReadMe.
     * - `failed`: There was a failure when attempting to create or update the page.
     * - `skipped`: The page was skipped due to no frontmatter data.
     * - `updated`: The page was updated in ReadMe.
     */
    result: 'created' | 'failed' | 'skipped' | 'updated';
    slug: string;
}
interface CreatePushResult extends BasePushResult {
    /**
     * The full response from the ReadMe API. If this is `null`,
     * the page was a dry run and no request was made.
     */
    response: PageResponseRepresentation | null;
    result: 'created';
}
interface FailedPushResult extends BasePushResult {
    error: APIv2Error | Error;
    result: 'failed';
}
interface SkippedPushResult extends BasePushResult {
    result: 'skipped';
}
interface UpdatePushResult extends BasePushResult {
    /**
     * The full response from the ReadMe API. If this is `null`,
     * the page was a dry run and no request was made.
     */
    response: PageResponseRepresentation | null;
    result: 'updated';
}
export type PushResult = CreatePushResult | FailedPushResult | SkippedPushResult | UpdatePushResult;
export interface FullUploadResults {
    created: CreatePushResult[];
    failed: FailedPushResult[];
    skipped: SkippedPushResult[];
    updated: UpdatePushResult[];
}
/**
 * Takes a path (either to a directory of files or to a single file)
 * and syncs those (either via POST or PATCH) to ReadMe.
 * @returns An array of objects with the results
 */
export default function syncPagePath(this: APIv2PageUploadCommands): Promise<FullUploadResults>;
export {};
