import { Command } from "discord-akairo";
import { Message, MessageEmbed } from "discord.js";
import { stripIndents } from "common-tags";
import { Colors } from "../../typings/Colors";
import { DatabaseUser } from "../../typings/DatabaseUser";

export default class SetupCommand extends Command {
    public constructor() {
        super("setup", {
            aliases: ["setup", "login"],
            args: [
                {
                    id: "apiKey",
                    type: "string",
                    prompt: {
                        start: new MessageEmbed().setTitle("Welcome to the Clockify Helper Discord bot").setDescription(
                            stripIndents`
                                Please enter your APIKey below!

                                *Notice: Clockify Helper Discord bot is not affiliated with Clockify.me*
                                `,
                        ),
                    },
                },
            ],
            category: "main",
            description: {
                content: "Register your API key from Clockify.",
                usage: "[apiKey]",
                example: ["setup fsdf970798g7d9f8g", "setup"],
            },
        });
    }

    public async exec(message: Message, { apiKey }: { apiKey: string }) {
        return message.channel.send(`Your api key is ${apiKey}`);
    }
}
