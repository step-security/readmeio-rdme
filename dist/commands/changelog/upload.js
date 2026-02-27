import BaseCommand from '../../lib/baseCommand.js';
import { keyFlag } from '../../lib/flags.js';
import { args, baseFlags, description, examples, summary } from '../../lib/pageCommandProperties.js';
import syncPagePath, {} from '../../lib/syncPagePath.js';
export default class ChangelogUploadCommand extends BaseCommand {
    id = 'changelog upload';
    route = 'changelogs';
    static section = 'Changelog';
    static summary = summary(this.section);
    static description = description(this.section);
    static args = args(this.section);
    static examples = examples(this.section);
    static flags = { key: keyFlag, ...baseFlags(this.section) };
    async run() {
        return syncPagePath.call(this);
    }
}
