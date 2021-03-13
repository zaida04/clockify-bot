import { Flag } from "discord-akairo";
import SubCommand from "../../../typings/SubCommand";

export default class TimesSubCommand extends SubCommand {
    public constructor() {
        super("times", {
            aliases: ["times"],
            category: "timings",
            description: {
                content: "Interact with your times",
                usage: "",
                example: ["times log"],
            },
            subCommands: [["times-log", "log"]],
            channel: "guild",
        });
    }

    public *args() {
        const method: string = yield {
            type: this.subCommands,
            otherwise: `Invalid subcommand! your options are: ${this.subCommands.map((x) => `\`${x}\``)}`,
        };

        return Flag.continue(method);
    }
}
