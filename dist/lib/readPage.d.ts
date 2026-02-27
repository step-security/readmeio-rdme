import type ChangelogsCommand from '../commands/changelogs.js';
import type { APIv2PageCommands } from '../index.js';
/**
 * The metadata for a page once it has been read.
 * This includes the Markdown contents of the file, the parsed frontmatter data,
 * the file path, and the derived slug.
 */
export interface PageMetadata<T = Record<string, unknown>> {
    /**
     * The contents of the Markdown file below the YAML frontmatter
     */
    content: string;
    /**
     * A JSON object representation of the the YAML frontmatter
     */
    data: T;
    /**
     * The path to the file
     */
    filePath: string;
    /**
     * A hash of the file contents (including the frontmatter)
     *
     * @deprecated this is no longer used in our API.
     */
    hash: string;
    /**
     * The page slug from frontmatter (and falls back to the filename without the extension)
     */
    slug: string;
}
export declare const allowedMarkdownExtensions: string[];
/**
 * Returns the content, matter and slug of the specified Markdown or HTML file
 */
export declare function readPage(this: APIv2PageCommands | ChangelogsCommand, 
/**
 * path to the HTML/Markdown file
 * (file extension must end in `.html`, `.md`., or `.markdown`)
 */
filePath: string): PageMetadata;
/**
 * Takes a path input and finds pages. If the path is a directory, it will recursively search for files with the specified extensions.
 * If the path is a file, it will check if the file has a valid extension.
 *
 * Once the files are found, it reads each file and returns an array of page metadata objects (e.g., the parsed frontmatter data).
 */
export declare function findPages(this: APIv2PageCommands | ChangelogsCommand, pathInput: string, allowedFileExtensions?: string[]): Promise<PageMetadata<Record<string, unknown>>[]>;
