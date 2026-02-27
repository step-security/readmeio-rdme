import type { Config, Interfaces } from '@oclif/core';
import type { COMMANDS } from '../index.js';
import type { CreateGHAHookOptsInClass } from './hooks/createGHA.js';
import type { ResponseBody } from './readmeAPIFetch.js';
import { Command as OclifCommand } from '@oclif/core';
import { info } from './logger.js';
import { handleAPIv2Res, readmeAPIv2Fetch } from './readmeAPIFetch.js';
type Flags<T extends typeof OclifCommand> = Interfaces.InferredFlags<(typeof BaseCommand)['baseFlags'] & T['flags']>;
type Args<T extends typeof OclifCommand> = Interfaces.InferredArgs<T['args']>;
/**
 * This is a light wrapper around the oclif command class that adds some
 * additional functionality and standardizes the way we handle logging, error handling,
 * and API requests.
 *
 * @note This class is not meant to be used directly, but rather as a base class for other commands.
 * It is also experimental and may change in the future.
 */
export default abstract class BaseCommand<T extends typeof OclifCommand> extends OclifCommand {
    constructor(argv: string[], config: Config);
    args: Args<T>;
    flags: Flags<T>;
    debug: (...args: unknown[]) => void;
    info(input: Parameters<typeof info>[0], opts?: Parameters<typeof info>[1]): void;
    /**
     * A type-safe handler for running another `rdme` command.
     *
     * @example
     * ```ts
     * await this.runRdmeCommand('docs:upload', [this.flags.dir, '--skip-validation', '--key', this.flags.key]);
     * ```
     */
    runRdmeCommand<C extends keyof typeof COMMANDS>(command: C, argv?: string[]): Promise<ReturnType<{
        readonly 'changelog:upload': typeof import("../commands/changelog/upload.js").default;
        readonly changelogs: typeof import("../commands/changelogs.js").default;
        readonly 'custompages:upload': typeof import("../commands/custompages/upload.js").default;
        readonly 'docs:migrate': typeof import("../commands/docs/migrate.js").default;
        readonly 'docs:upload': typeof import("../commands/docs/upload.js").default;
        readonly login: typeof import("../commands/login.js").default;
        readonly logout: typeof import("../commands/logout.js").default;
        readonly 'openapi:convert': typeof import("../commands/openapi/convert.js").default;
        readonly 'openapi:inspect': typeof import("../commands/openapi/inspect.js").default;
        readonly 'openapi:reduce': typeof import("../commands/openapi/reduce.js").default;
        readonly 'openapi:resolve': typeof import("../commands/openapi/resolve.js").default;
        readonly 'openapi:upload': typeof import("../commands/openapi/upload.js").default;
        readonly 'openapi:validate': typeof import("../commands/openapi/validate.js").default;
        readonly rage: typeof import("../commands/rage.js").default;
        readonly 'reference:upload': typeof import("../commands/reference/upload.js").default;
        readonly whoami: typeof import("../commands/whoami.js").default;
    }[C]["prototype"]["run"]>>;
    warn(input: Error | string): Error | string;
    protected catch(err: Error & {
        exitCode?: number;
    }): Promise<any>;
    /**
     * This is a light wrapper around the oclif command's `_run` function
     * that takes the result and sets a GitHub step output parameter to the result
     * when being run from a GitHub Actions runner.
     */
    protected _run<U>(): Promise<U>;
    init(): Promise<void>;
    /**
     * Wrapper around `handleAPIv2Res` that binds the context of the class to the function.
     */
    handleAPIRes<R extends ResponseBody = ResponseBody>(...args: Parameters<typeof handleAPIv2Res>): Promise<R>;
    /**
     * Wrapper around `readmeAPIv2Fetch` that binds the context of the class to the function.
     */
    readmeAPIFetch(...args: Parameters<typeof readmeAPIv2Fetch>): Promise<Response>;
    runCreateGHAHook(opts: CreateGHAHookOptsInClass): Promise<string>;
}
export {};
