/**
 * Wrapper for debug statements.
 */
declare function debug(input: unknown): void;
/**
 * Wrapper for error statements.
 */
declare function error(input: string): void;
/**
 * Wrapper for info/notice statements.
 *
 * @deprecated use the base command's `this.info` method instead.
 */
declare function info(input: string, opts?: {
    /** whether or not to prefix the statement with this emoji: ℹ️ */
    includeEmojiPrefix: boolean;
}): void;
/**
 * Options for ora spinners.
 */
declare function oraOptions(): {
    isEnabled?: false;
};
/**
 * Wrapper for warn statements.
 *
 * @deprecated use the base command's `this.warn` method instead.
 */
declare function warn(
/**
 * Text that precedes the warning.
 * This is *not* used in the GitHub Actions-formatted warning.
 */
input: string, prefix?: string): void;
export { debug, error, info, oraOptions, warn };
