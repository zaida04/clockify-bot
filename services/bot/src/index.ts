import Client from "./core/client/Client";
import { config } from "dotenv";
import { ClientOptions } from "./typings/ClientOptions";
import { join } from "path";

if (process.env.NODE_ENV !== "production") config({ path: join(__dirname, "..", "..", "..", "bot.env") });

// @ts-ignore
import knexConfig from "../../../knexfile";

if (!process.env.DEFAULT_PREFIX) throw new Error("Must provide a prefix!");
if (!process.env.DISCORD_TOKEN) throw new Error("Must provide a token!");
if (!process.env.DATABASE_URI) throw new Error("Must provide database URI!");

const options: ClientOptions = {
    knexConfig,
    defaultPrefix: process.env.DEFAULT_PREFIX,
};

const BotClient = new Client(options);
void BotClient.login(process.env.DISCORD_TOKEN);
