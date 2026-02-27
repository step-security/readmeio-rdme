import BaseCommand from '../../lib/baseCommand.js';
import { type FullUploadResults } from '../../lib/syncPagePath.js';
export default class RefUploadCommand extends BaseCommand<typeof RefUploadCommand> {
    id: "reference upload";
    route: "reference";
    static section: "Reference";
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
        'confirm-autofixes': import("@oclif/core/interfaces").BooleanFlag<boolean>;
        'dry-run': import("@oclif/core/interfaces").BooleanFlag<boolean>;
        'max-errors': import("@oclif/core/interfaces").OptionFlag<number, import("@oclif/core/interfaces").CustomOptions>;
        'skip-validation': import("@oclif/core/interfaces").BooleanFlag<boolean>;
        branch: import("@oclif/core/interfaces").OptionFlag<string, import("@oclif/core/interfaces").CustomOptions>;
        key: import("@oclif/core/interfaces").OptionFlag<string, import("@oclif/core/interfaces").CustomOptions>;
    };
    run(): Promise<FullUploadResults>;
}
