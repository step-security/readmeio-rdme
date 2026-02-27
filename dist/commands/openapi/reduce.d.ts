import BaseCommand from '../../lib/baseCommand.js';
export default class OpenAPIReduceCommand extends BaseCommand<typeof OpenAPIReduceCommand> {
    id: "openapi reduce";
    static summary: string;
    static description: string;
    static args: {
        spec: import("@oclif/core/interfaces").Arg<string | undefined, Record<string, unknown>>;
    };
    static flags: {
        method: import("@oclif/core/interfaces").OptionFlag<string[] | undefined, import("@oclif/core/interfaces").CustomOptions>;
        out: import("@oclif/core/interfaces").OptionFlag<string | undefined, import("@oclif/core/interfaces").CustomOptions>;
        path: import("@oclif/core/interfaces").OptionFlag<string[] | undefined, import("@oclif/core/interfaces").CustomOptions>;
        tag: import("@oclif/core/interfaces").OptionFlag<string[] | undefined, import("@oclif/core/interfaces").CustomOptions>;
        title: import("@oclif/core/interfaces").OptionFlag<string | undefined, import("@oclif/core/interfaces").CustomOptions>;
        'working-directory': import("@oclif/core/interfaces").OptionFlag<string | undefined, import("@oclif/core/interfaces").CustomOptions>;
    };
    static examples: {
        description: string;
        command: string;
    }[];
    run(): Promise<string>;
}
