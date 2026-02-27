import type { Config } from '@oclif/core';
import type { HelpOptions } from '@oclif/core/interfaces';
import { Help } from '@oclif/core';
export default class CustomHelpClass extends Help {
    constructor(config: Config, opts?: Partial<HelpOptions>);
    formatRoot(): string;
}
