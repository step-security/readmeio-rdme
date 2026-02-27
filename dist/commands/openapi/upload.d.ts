import BaseCommand from '../../lib/baseCommand.js';
export default class OpenAPIUploadCommand extends BaseCommand<typeof OpenAPIUploadCommand> {
    id: "openapi upload";
    static summary: string;
    static description: string;
    static args: {
        spec: import("@oclif/core/interfaces").Arg<string | undefined, Record<string, unknown>>;
    };
    static flags: {
        'confirm-overwrite': import("@oclif/core/interfaces").BooleanFlag<boolean>;
        'dry-run': import("@oclif/core/interfaces").BooleanFlag<boolean>;
        'legacy-id': import("@oclif/core/interfaces").OptionFlag<string | undefined, import("@oclif/core/interfaces").CustomOptions>;
        slug: import("@oclif/core/interfaces").OptionFlag<string | undefined, import("@oclif/core/interfaces").CustomOptions>;
        title: import("@oclif/core/interfaces").OptionFlag<string | undefined, import("@oclif/core/interfaces").CustomOptions>;
        useSpecVersion: import("@oclif/core/interfaces").BooleanFlag<boolean>;
        'working-directory': import("@oclif/core/interfaces").OptionFlag<string | undefined, import("@oclif/core/interfaces").CustomOptions>;
        branch: import("@oclif/core/interfaces").OptionFlag<string, import("@oclif/core/interfaces").CustomOptions>;
        key: import("@oclif/core/interfaces").OptionFlag<string, import("@oclif/core/interfaces").CustomOptions>;
    };
    static examples: {
        description: string;
        command: string;
    }[];
    private isStatusPending;
    /**
     * Poll the ReadMe API until the upload is complete.
     */
    private pollAPIUntilUploadIsComplete;
    run(): Promise<{
        uri: string;
        status: "done";
    } | undefined>;
}
