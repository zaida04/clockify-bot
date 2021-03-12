import { knex, Knex } from "knex";
import { AkairoClient } from "discord-akairo";

export default class DatabaseManager {
    public api: Knex;
    private readonly client: AkairoClient;

    public constructor(dbENV: Knex.Config, client: AkairoClient) {
        this.api = knex(dbENV);
        this.client = client;
    }
}
