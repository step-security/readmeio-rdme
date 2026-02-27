/**
 * Wrapper function that returns the name of the current CI environment
 * (or "n/a" if it's not available).
 *
 * Full list of vendors available here:
 * https://github.com/watson/ci-info#supported-ci-tools
 */
export declare function ciName(): string;
/**
 * Small env check to determine if we're running our testbed
 */
export declare function isTest(): boolean;
/**
 * Small env check to determine if the current command is being run
 * via an npm (or yarn) script.
 *
 * The reason we have this weird conditional logic is because we run our tests via
 * an npm script and we don't want false positives when running tests.
 *
 * @see {@link https://docs.npmjs.com/cli/v8/using-npm/scripts#current-lifecycle-event}
 * @see {@link https://docs.npmjs.com/cli/v6/using-npm/scripts#current-lifecycle-event}
 * @see {@link https://yarnpkg.com/advanced/lifecycle-scripts}
 */
export declare function isNpmScript(): boolean;
/**
 * Small check to ensure we're in a safe CI environment.
 *
 * The reason we have this weird conditional logic is because we run our tests in
 * a CI environment and we don't want false positives when running tests.
 */
export default function isCI(): boolean;
/**
 * Small env check to determine if we're in a GitHub Actions environment.
 *
 * @see {@link https://docs.github.com/en/actions/learn-github-actions/environment-variables#default-environment-variables}
 */
export declare function isGHA(): boolean;
