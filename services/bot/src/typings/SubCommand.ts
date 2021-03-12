import { CommandOptions, Command } from "discord-akairo";

export default class SubCommand extends Command {
    public subCommands: string[][];

    public constructor(name: string, options: SubCommandOptions) {
        super(name, options);
        this.subCommands = options.subCommands;
    }
}

interface SubCommandOptions extends CommandOptions {
    subCommands: string[][];
}
