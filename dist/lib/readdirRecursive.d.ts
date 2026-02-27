/**
 * Recursively grabs all files within a given directory
 * (including subdirectories)
 *
 * @returns array of file names
 */
export default function readdirRecursive(
/** path to directory */
folderToSearch: string, 
/**
 * Boolean to indicate whether or not to ignore `.git` directory
 * as well as any files specified in `.gitignore`
 */
ignoreGit?: boolean): string[];
