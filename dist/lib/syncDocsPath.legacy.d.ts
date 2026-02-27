import type ChangelogsCommand from '../commands/changelogs.js';
/**
 * Takes a path (either to a directory of files or to a single file)
 * and syncs those (either via POST or PUT) to ReadMe.
 * @returns A promise-wrapped string with the results
 *
 * @deprecated This is for APIv1 only. Use `syncDocsPath.ts` instead, if possible.
 */
export default function syncDocsPath(this: ChangelogsCommand, 
/** ReadMe project version */
selectedVersion?: string): Promise<string>;
