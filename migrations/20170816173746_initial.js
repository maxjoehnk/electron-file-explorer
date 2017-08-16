exports.up = async function (knex) {
    await knex.schema.createTable('tags', table => {
        table.increments();
        table.string('label');
        table.string('color');
    });
    await knex.schema.createTable('favorites', table => {
        table.increments();
        table.string('label').unique().notNullable();
        table.string('icon');
        table.text('path').unique().notNullable();
    });
    await knex.schema.createTable('taggedFiles', table => {
        table.integer('tag_id').unsigned();
        table.foreign('tag_id').references('tags.id');
        table.text('path').notNullable();
    });
};

exports.down = async function (knex) {
    await knex.schema.dropTable('tags');
    await knex.schema.dropTable('favorites');
    await knex.schema.dropTable('taggedFiles');
};
