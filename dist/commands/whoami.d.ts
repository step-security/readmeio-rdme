import BaseCommand from '../lib/baseCommand.js';
export default class WhoAmICommand extends BaseCommand<typeof WhoAmICommand> {
    static description: string;
    run(): Promise<string>;
}
