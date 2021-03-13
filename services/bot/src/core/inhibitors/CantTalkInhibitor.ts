import { Command, Inhibitor } from "discord-akairo";
import { Permissions, Message } from "discord.js";

export default class CantTalkInhibitor extends Inhibitor {
    public constructor() {
        super("cant-talk-inhibitor", {
            reason: "This guild is on the blocklist!",
            type: "post",
            priority: 0,
        });
    }

    public exec(message: Message): boolean {
        return false;
        /* if (message.channel.type === "dm" || !message.guild || !message.guild.me) return false;
        return !message.channel.permissionsFor(this.client.user!)!.has("SEND_MESSAGES"); */
    }
}
