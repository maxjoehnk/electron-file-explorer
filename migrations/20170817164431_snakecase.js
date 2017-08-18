exports.up = async function (knex) {
    await knex.schema.renameTable('taggedFiles', 'tagged_files');
};

exports.down = async function (knex) {
    await knex.schema.renameTable('tagged_files', 'taggedFiles');
};
