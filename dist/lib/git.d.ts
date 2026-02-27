import type { Hook } from '@oclif/core';
export declare const git: import("simple-git").SimpleGit;
/**
 * Function to return various git attributes needed for running GitHub Action
 */
export declare function getGitData(this: Hook.Context): Promise<{
    containsGitHubRemote: boolean | undefined;
    defaultBranch: string | undefined;
    isRepo: boolean;
    repoRoot: string;
}>;
