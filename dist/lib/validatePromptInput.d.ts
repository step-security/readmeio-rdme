/**
 * Removes any non-alphanumeric characters and replaces them with hyphens.
 *
 * This is used for file names and for YAML keys.
 */
export declare const cleanFileName: (input: string) => string;
/**
 * A validator function used in our prompts for when a user
 * is prompted to specify a file path.
 *
 * @returns true if path is valid (i.e. is non-empty and doesn't already exist),
 * otherwise a string containing the error message
 */
export declare function validateFilePath(
/** the file name */
value: string, 
/** An optional function for adding a file path or any filename validations */
getFullPath?: (file: string) => string): true | "Specified output path already exists." | "An output path must be supplied.";
/**
 * Validates that a project subdomain value is valid.
 *
 * @returns true if the subdomain value is valid, else an error message
 */
export declare function validateSubdomain(
/** the raw project subdomain value */
value: string): true | "Project subdomain must contain only letters, numbers and dashes.";
