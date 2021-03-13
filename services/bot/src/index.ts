import Client from "./core/client/Client";
import { ClientOptions } from "./typings/ClientOptions";
import { join } from "path";
import { config } from "dotenv";
// @ts-ignore
import knexConfig from "../../../knexfile";

const main = async () => {
    if (process.env.NODE_ENV !== "production") {
        config({ path: join(__dirname, "..", "..", "..", "bot.env") });
    }

    if (!process.env.DEFAULT_PREFIX) throw new Error("Must provide a prefix!");
    if (!process.env.DISCORD_TOKEN) throw new Error("Must provide a token!");
    if (!process.env.POSTGRES_DB) throw new Error("Must provide a Postgres DB name");
    if (!process.env.POSTGRES_USER) throw new Error("Must provide a Postgres DB user");
    if (!process.env.POSTGRES_PASSWORD) throw new Error("Must provide a Postgres DB password");

    const BotClient = new Client({
        knexConfig,
        defaultPrefix: process.env.DEFAULT_PREFIX,
    });
    void BotClient.login(process.env.DISCORD_TOKEN);
};

main();
