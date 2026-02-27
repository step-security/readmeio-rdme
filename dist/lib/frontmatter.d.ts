import type { ErrorObject } from 'ajv';
import type { SchemaObject } from 'oas/types';
import type { APIv2PageCommands } from '../index.js';
import type { Mappings } from './readmeAPIFetch.js';
import type { PageMetadata } from './readPage.js';
/**
 * Validates the frontmatter data, fixes any issues, and returns the results.
 */
export declare function fix(this: APIv2PageCommands, 
/** frontmatter data to be validated */
data: PageMetadata['data'], 
/** schema to validate against */
schema: SchemaObject, 
/**
 * mappings of object IDs to slugs
 * (e.g., category IDs to category URIs)
 */
mappings: Mappings): {
    fixableErrorCount: number;
    errors: ErrorObject[];
    hasIssues: boolean;
    unfixableErrors: ErrorObject[];
    updatedData: PageMetadata['data'];
};
export declare function writeFixes(this: APIv2PageCommands, 
/** all metadata for the page that will be written to */
metadata: PageMetadata, 
/** frontmatter changes to be applied */
updatedData: PageMetadata['data'], 
/** output directory to write to */
outputDirArg?: string): {
    data: Record<string, unknown>;
    content: string;
    filePath: string;
    hash: string;
    slug: string;
};
