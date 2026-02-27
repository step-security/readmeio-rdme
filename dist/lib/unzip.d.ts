import type { MarkdownFileScanResultOpts } from '../types.js';
/**
 * If the input is a zip file, unzip it and return the new path.
 * If the input is not a zip file, pass through the original path.
 */
export declare function attemptUnzip(pathInput: string): Promise<MarkdownFileScanResultOpts>;
