const knex = require('knex');
const {join} = require('path');
const {isDevEnv} = require('./util');
const d = require('debug')('file-explorer:db');

d('Opening Database');
const db = knex({
    client: 'sqlite3',
    connection: {
        filename: join(__dirname, '../db.sqlite3')
    },
    debug: isDevEnv()
});

const setup = async () => {
    d('Migrating Database');
    await db.migrate.latest({
        directory: join(__dirname, '../migrations')
    });
    d('Migration done');
    d('Seeding Database');
    await db.seed.run({
        directory: join(__dirname, '../seeds')
    });
    d('Seeding done');
};

module.exports = { db, setup };
