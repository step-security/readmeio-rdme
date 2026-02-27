import type { Command, Hook } from '@oclif/core';
type ParsedOpts = Record<string, unknown>;
/**
 * Generates the key for storing info in `configstore` object.
 */
export declare const getConfigStoreKey: (
/** the root of the repository */
repoRoot: string) => string;
/**
 * Removes any non-file-friendly characters and adds
 * the full path + file extension for GitHub Workflow files.
 */
export declare const getGHAFileName: (
/** raw file name to clean up */
fileName: string) => string;
/**
 * Post-command flow for creating a GitHub Actions workflow file.
 *
 */
export default function createGHA(this: Hook.Context, msg: string, command: Command.Class, parsedOpts: ParsedOpts): Promise<string>;
export {};
