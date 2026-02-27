import type { APIv2PageCommands } from '../index.js';
import type { PageMetadata } from './readPage.js';
import type { PageRequestSchema, PageRoute } from './types/index.js';
type ValidationStatus = 'autofixed-with-issues' | 'autofixed' | 'has-issues' | 'valid';
export declare function validateFrontmatter(this: APIv2PageCommands, pages: PageMetadata[], outputDir?: string): Promise<{
    pages: PageMetadata<PageRequestSchema<PageRoute>>[];
    status: ValidationStatus;
}>;
export {};
