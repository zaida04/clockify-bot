import DatabaseManager from "../core/managers/DatabaseManager";
import Logger from "../logger/Logger";
import { ClientOptions } from "./ClientOptions";

declare module "discord-akairo" {
    interface AkairoClient {
        config: ClientOptions;
        commandHandler: CommandHandler;
        listenerHandler: ListenerHandler;
        db: DatabaseManager;
        inhibitorHandler: InhibitorHandler;
        Logger: Logger;
    }
    interface Command {
        sub_commands?: string[];
    }
}
