import type { MigrationStats } from '../../lib/hooks/exported.js';
import BaseCommand from '../../lib/baseCommand.js';
export default class DocsMigrateCommand extends BaseCommand<typeof DocsMigrateCommand> {
    id: "docs migrate";
    route: "guides";
    static hidden: boolean;
    static summary: string;
    static description: string;
    static args: {
        path: import("@oclif/core/interfaces").Arg<string, Record<string, unknown>>;
    };
    static flags: {
        'hide-experimental-warning': import("@oclif/core/interfaces").BooleanFlag<boolean>;
        'confirm-autofixes': import("@oclif/core/interfaces").BooleanFlag<boolean>;
        'dry-run': import("@oclif/core/interfaces").BooleanFlag<boolean>;
        'max-errors': import("@oclif/core/interfaces").OptionFlag<number, import("@oclif/core/interfaces").CustomOptions>;
        'skip-validation': import("@oclif/core/interfaces").BooleanFlag<boolean>;
        out: import("@oclif/core/interfaces").OptionFlag<string | undefined, import("@oclif/core/interfaces").CustomOptions>;
    };
    run(): Promise<{
        outputDir: string;
        stats: MigrationStats;
    }>;
}
