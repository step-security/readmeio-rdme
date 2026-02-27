import BaseCommand from '../lib/baseCommand.js';
export default class RageCommand extends BaseCommand<typeof RageCommand> {
    static description: string;
    static hidden: boolean;
    run(): Promise<string>;
}
