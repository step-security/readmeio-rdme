import type { Hook } from '@oclif/core';
/**
 * @see {@link https://docs.npmjs.com/adding-dist-tags-to-packages}
 */
type NPMDistTag = 'latest';
/**
 * Return the major Node.js version specified in our `package.json` config.
 *
 * @example 14
 */
export declare function getNodeVersion(): string;
/**
 * The current `rdme` version, as specified in the `package.json`
 * or in the oclif hook context.
 *
 * @example "8.0.0"
 * @note we mock this function in our snapshots
 * @see {@link https://stackoverflow.com/a/54245672}
 */
export declare function getPkgVersion(this: Hook.Context | void): string;
/**
 * The current `rdme` version
 *
 * @example "8.0.0"
 * @see {@link https://docs.npmjs.com/adding-dist-tags-to-packages}
 * @note we mock this function in our snapshots
 * @see {@link https://stackoverflow.com/a/54245672}
 */
export declare function getPkgVersionFromNPM(this: Hook.Context | void, 
/**
 * The `npm` dist tag to retrieve. If this value is omitted,
 * the version from the `package.json` is returned.
 */
npmDistTag?: NPMDistTag): Promise<string>;
/**
 * The current major `rdme` version
 *
 * @example 8
 */
export declare function getMajorPkgVersion(this: Hook.Context | void, npmDistTag?: NPMDistTag): Promise<number>;
export {};
