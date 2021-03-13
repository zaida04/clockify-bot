import { Command } from "discord-akairo";

import { Message } from "discord.js";

export default class TimesLogCommand extends Command {
    public constructor() {
        super("times-log", {
            category: "timings",
            description: {
                content: "Log your time",
                usage: "<...args>",
                example: ["times log"],
            },
            args: [
                {
                    id: "id",
                    type: "string",
                    prompt: {
                        start: "Give me the ID of a case to fetch for you",
                    },
                },
            ],
            channel: "guild",
        });
    }

    public async exec(message: Message, { id }: { id?: string }) {}
}
