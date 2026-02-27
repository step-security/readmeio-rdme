export declare const branchFlag: (additionalDescription?: string[]) => {
    branch: import("@oclif/core/interfaces").OptionFlag<string, import("@oclif/core/interfaces").CustomOptions>;
};
/**
 * Used in any command where `github` is a `flag.
 */
export declare const githubFlag: import("@oclif/core/interfaces").BooleanFlag<boolean>;
/**
 * Used in any command where `key` is a `flag.
 */
export declare const keyFlag: import("@oclif/core/interfaces").OptionFlag<string, import("@oclif/core/interfaces").CustomOptions>;
/**
 * Used in the `openapi` family of commands where `title` is an option.
 */
export declare const titleFlag: import("@oclif/core/interfaces").OptionFlag<string | undefined, import("@oclif/core/interfaces").CustomOptions>;
/**
 * Used in the `openapi` family of commands.
 */
export declare const workingDirectoryFlag: import("@oclif/core/interfaces").OptionFlag<string | undefined, import("@oclif/core/interfaces").CustomOptions>;
export declare const specArg: import("@oclif/core/interfaces").Arg<string | undefined, Record<string, unknown>>;
