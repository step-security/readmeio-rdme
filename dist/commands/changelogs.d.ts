import BaseCommand from '../lib/baseCommand.js';
export default class ChangelogsCommand extends BaseCommand<typeof ChangelogsCommand> {
    static hidden: boolean;
    static state: string;
    id: "changelogs";
    static id: "changelogs";
    static deprecationOptions: {
        message: string;
    };
    static summary: string;
    static description: string;
    static args: {
        path: import("@oclif/core/interfaces").Arg<string, Record<string, unknown>>;
    };
    static examples: {
        description: string;
        command: string;
    }[];
    static flags: {
        key: import("@oclif/core/interfaces").OptionFlag<string, import("@oclif/core/interfaces").CustomOptions>;
        dryRun: import("@oclif/core/interfaces").BooleanFlag<boolean>;
        github: import("@oclif/core/interfaces").BooleanFlag<boolean>;
    };
    run(): Promise<string>;
}
