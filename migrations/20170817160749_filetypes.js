exports.up = async function (knex, Promise) {
    await knex.schema.createTable('categories', table => {
        table.uuid('id')
            .primary();
        table.string('label')
            .notNullable();
        table.string('icon');
        table.string('color');
    });
    await knex.schema.createTable('types', table => {
        table.uuid('id')
            .primary();
        table.string('label')
            .notNullable();
        table.uuid('category_id');
        table.foreign('category_id')
            .references('categories.id');
        table.string('color');
        table.string('icon');
    });
    await knex.schema.createTable('patterns', table => {
        table.increments();
        table.string('pattern')
            .unique()
            .notNullable();
        table.uuid('type_id');
        table.foreign('type_id')
            .references('types.id');
    });
};

exports.down = async function (knex, Promise) {
    await knex.schema.dropTable('patterns');
    await knex.schema.dropTable('types');
    await knex.schema.dropTable('categories');
};
