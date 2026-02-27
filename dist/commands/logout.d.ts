import BaseCommand from '../lib/baseCommand.js';
export default class LogoutCommand extends BaseCommand<typeof LogoutCommand> {
    static description: string;
    run(): Promise<string>;
}
