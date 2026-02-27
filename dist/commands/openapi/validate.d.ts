import BaseCommand from '../../lib/baseCommand.js';
export default class OpenAPIValidateCommand extends BaseCommand<typeof OpenAPIValidateCommand> {
    id: "openapi validate";
    static summary: string;
    static description: string;
    static id: "openapi validate";
    static args: {
        spec: import("@oclif/core/interfaces").Arg<string | undefined, Record<string, unknown>>;
    };
    static examples: {
        description: string;
        command: string;
    }[];
    static flags: {
        github: import("@oclif/core/interfaces").BooleanFlag<boolean>;
        'working-directory': import("@oclif/core/interfaces").OptionFlag<string | undefined, import("@oclif/core/interfaces").CustomOptions>;
    };
    run(): Promise<string>;
}
