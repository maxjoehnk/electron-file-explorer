const { app, BrowserWindow, ipcMain, shell } = require('electron');
const { isDevEnv, getIcon, getType, getColor } = require('./util');
const { join } = require('path');
const { existsSync } = require('fs');
const promisify = require('promisify-node');
const { readdir, stat, writeFile } = promisify('fs');
const knex = require('knex');

let window;

const start = () => {

    const {
        default: installExtension,
        REDUX_DEVTOOLS
    } = require('electron-devtools-installer');
    installExtension([
        REDUX_DEVTOOLS
    ])
        .then(() => console.log('Setup Chrome Extensions'))
        .catch(err => console.error('Could not setup Chrome Extensions', err));
    const url = `file://${join(__dirname, '../dist')}/index.html`;
    window = new BrowserWindow({
        frame: false
    });
    window.loadURL(url);
    if (isDevEnv()) {
        window.webContents.openDevTools()
    }
};

const setup = async() => {
    const db = knex({
        client: 'sqlite3',
        connection: {
            filename: join(__dirname, '../db.sqlite3')
        },
        debug: true
    });

    await db.migrate.latest();
    await db.seed.run();

    ipcMain.on('FETCH_FAVORITES', async event => {
        try {
            const favorites = await db.select().from('favorites');
            event.sender.send('FETCH_FAVORITES_SUCCESS', favorites);
        }catch (err) {
            console.error(err);
            event.sender.send('FETCH_FAVORITES_ERROR', err);
        }
    });

    ipcMain.on('FETCH_TAGS', async event => {
        try {
            const tags = await db.select().from('tags');
            event.sender.send('FETCH_TAGS_SUCCESS', tags);
        }catch (err) {
            console.error(err);
            event.sender.send('FETCH_TAGS_ERROR', err);
        }
    });

    ipcMain.on('FETCH_ITEMS', (event, path) => {
        fetch(path)
            .then(items => event.sender.send('FETCH_ITEMS', items))
            .catch(err => console.error(err));
    });

    ipcMain.on('OPEN_ITEM', (event, path) => {
        shell.openItem(path);
    });

    ipcMain.on('CREATE_FILE', async(event, { path, filename }) => {
        const file = join(path, filename);
        if (existsSync(file)) {
            event.sender.send('CREATE_FILE_ERROR', { code: 'FILE_ALREADY_EXISTS' });
            return;
        }
        try {
            await writeFile(file, '', 'utf8');
            event.sender.send('CREATE_FILE_SUCCESS');
        }catch (err) {
            console.error(err);
            event.sender.send('CREATE_FILE_ERROR', err);
        }
    });
};

const fetch = async path => {
    const dir = await readdir(path);
    const stats = await Promise.all(dir.map(file => stat(join(path, file))));
    const items = dir
        .map((file, i) => {
            return {
                path: join(path, file),
                filename: file,
                stats: stats[i]
            };
        })
        .map(({ path, filename, stats }) => ({
            path,
            filename,
            stats,
            directory: stats.isDirectory(),
            hidden: filename.startsWith('.')
        }))
        .map(file => Object.assign({}, file, {
            icon: getIcon(file),
            type: getType(file),
            color: getColor(file)
        }))
        .filter(({ hidden }) => !hidden);
    const folders = items
        .filter(({ directory }) => directory)
        .sort(({ filename: a }, { filename: b }) => a.localeCompare(b));
    const files = items.filter(({ directory }) => !directory)
        .sort(({ filename: a }, { filename: b }) => a.localeCompare(b));;
    return [...folders, ...files];
};

app.on('ready', start);

setup()
    .then(() => console.log('Setup complete'))
    .catch(err => console.error(err));
