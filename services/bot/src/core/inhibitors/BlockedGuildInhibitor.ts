import { Command, Inhibitor } from "discord-akairo";
import { Message } from "discord.js";

export default class BlockedGuildInhibitor extends Inhibitor {
    public constructor() {
        super("blocked-guild-inhibitor", {
            reason: "This guild is on the blocklist!",
            type: "post",
            priority: 0,
        });
    }

    public async exec(message: Message): Promise<boolean> {
        if (!message.guild) return false;
        const guildIsBlocked = await this.client.db.api("blocklist").where("guild", message.guild.id).first();
        if (guildIsBlocked) void message.guild.leave();
        return Boolean(guildIsBlocked);
    }
}
