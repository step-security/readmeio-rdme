import BaseCommand from '../../lib/baseCommand.js';
export default class OpenAPIConvertCommand extends BaseCommand<typeof OpenAPIConvertCommand> {
    id: "openapi convert";
    static summary: string;
    static description: string;
    static args: {
        spec: import("@oclif/core/interfaces").Arg<string | undefined, Record<string, unknown>>;
    };
    static flags: {
        out: import("@oclif/core/interfaces").OptionFlag<string | undefined, import("@oclif/core/interfaces").CustomOptions>;
        title: import("@oclif/core/interfaces").OptionFlag<string | undefined, import("@oclif/core/interfaces").CustomOptions>;
        'working-directory': import("@oclif/core/interfaces").OptionFlag<string | undefined, import("@oclif/core/interfaces").CustomOptions>;
    };
    static examples: {
        description: string;
        command: string;
    }[];
    run(): Promise<string>;
}
