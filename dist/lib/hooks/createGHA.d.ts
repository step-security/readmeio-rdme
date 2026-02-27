import type { Command, Hook } from '@oclif/core';
import type { Hooks } from '@oclif/core/interfaces';
type ParsedOpts = Record<string, unknown>;
export interface CreateGHAHookOptsInClass {
    parsedOpts?: ParsedOpts;
    result: string;
}
type CreateGHAHookOpts = Omit<CreateGHAHookOptsInClass, 'parsedOpts'> & {
    command: Command.Class;
    parsedOpts: ParsedOpts;
};
export interface CreateGHAHook extends Hooks {
    createGHA: {
        options: CreateGHAHookOpts;
        return: string;
    };
}
declare const hook: Hook<'createGHA', CreateGHAHook>;
export default hook;
