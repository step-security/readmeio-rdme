import BaseCommand from '../../lib/baseCommand.js';
export default class OpenAPIInspectCommand extends BaseCommand<typeof OpenAPIInspectCommand> {
    id: "openapi inspect";
    static summary: string;
    static description: string;
    static args: {
        spec: import("@oclif/core/interfaces").Arg<string | undefined, Record<string, unknown>>;
    };
    static flags: {
        feature: import("@oclif/core/interfaces").OptionFlag<string[] | undefined, import("@oclif/core/interfaces").CustomOptions>;
        'working-directory': import("@oclif/core/interfaces").OptionFlag<string | undefined, import("@oclif/core/interfaces").CustomOptions>;
    };
    static examples: {
        description: string;
        command: string;
    }[];
    run(): Promise<string>;
}
