

exports.up = async function(knex) {
    await knex.schema.createTable("settings", (table) => {
        table.uuid("id").unique().primary()
        table.string("guild");
        table.string("prefix").nullable();
    });
    await knex.schema.createTable("users", (table) => {
        table.uuid("id").unique().primary()
        table.string("user");
        table.string("apiKey").nullable();
    });
    await knex.schema.createTable("blocklist", (table) => {
        table.string("guild").unique().primary();
        table.string("reason").nullable();
    });
}

exports.down = async function(knex) {
    await knex.schema.dropTable("settings");
    await knex.schema.dropTable("users");
}
