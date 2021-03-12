import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable("settings", (table) => {
        table.uuid("id").unique().primary().defaultTo(knex.raw("(UUID())"));
        table.string("guild");
        table.string("prefix").nullable();
    });
    await knex.schema.createTable("users", (table) => {
        table.uuid("id").unique().primary().defaultTo(knex.raw("(UUID())"));
        table.string("user");
        table.string("apiKey").nullable();
    });
    await knex.schema.createTable("blocklist", (table) => {
        table.string("guild").unique().primary();
        table.string("reason").nullable();
    });
}

export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable("settings");
    await knex.schema.dropTable("users");
}
