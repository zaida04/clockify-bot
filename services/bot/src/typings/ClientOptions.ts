import { Knex } from "knex";

export interface ClientOptions {
    knexConfig: Knex.Config;
    defaultPrefix: string;
}
