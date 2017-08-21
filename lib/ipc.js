const {ipcMain, shell} = require('electron');
const {isWindows} = require('./util');
const {getTypeData, getTypes} = require('./types');
const {existsSync} = require('fs');
const {join} = require('path');
const {blockDevices} = require('systeminformation');
const promisify = require('promisify-node');
const {readdir, stat, writeFile} = promisify('fs');
const {db} = require('./db');
const d = require('debug')('file-explorer:ipc');

const fetch = async path => {
    const dir = await readdir(path);
    const stats = await Promise.all(dir.map(file =>
        stat(join(path, file))
            .catch(err => {
                console.error(err);
                return undefined;
            })
    ));
    const types = await getTypes();
    const promises = dir
        .map((file, i) => {
            return {
                path: join(path, file),
                filename: file,
                stats: stats[i]
            };
        })
        .map(({path, filename, stats}) => ({
            path,
            filename,
            directory: stats && stats.isDirectory(),
            hidden: filename.startsWith('.'),
            metadata: {
                createdAt: stats.birthtime,
                updatedAt: stats.mtime,
                addedAt: stats.atime,
                size: stats.size
            }
        }))
        .filter(({hidden}) => !hidden)
        .map(async file => {
            const typedata = await getTypeData(types, file);
            return Object.assign({}, file, typedata);
        });
    const items = await Promise.all(promises);
    const folders = items
        .filter(({directory}) => directory)
        .sort(({filename: a}, {filename: b}) => a.localeCompare(b));
    const files = items.filter(({directory}) => !directory)
        .sort(({filename: a}, {filename: b}) => a.localeCompare(b));
    return [...folders, ...files];
};

ipcMain.on('FETCH_FAVORITES', async event => {
    d('Fetching Favorites');
    try {
        const favorites = await db.select().from('favorites');
        d(`Fetched ${favorites.length} favorites`);
        event.sender.send('FETCH_FAVORITES_SUCCESS', favorites);
    } catch (err) {
        console.error(err);
        event.sender.send('FETCH_FAVORITES_ERROR', err);
    }
});

ipcMain.on('FETCH_DEVICES', async event => {
    d('Fetching Devices');
    try {
        const devices = await blockDevices();
        const mounted = devices
            .filter(({mount}) => !!mount)
            .map(device => Object.assign({}, device, {
                label: isWindows() ? `${device.label} (${device.name})` : (device.label || device.name)
            }));
        d(`Fetched ${mounted.length} devices filtered from ${devices.length}`);
        event.sender.send('FETCH_DEVICES_SUCCESS', mounted);
    } catch (err) {
        console.error(err);
        event.sender.send('FETCH_TAGS_ERROR', err);
    }
});

ipcMain.on('FETCH_TAGS', async event => {
    d('Fetching Tags');
    try {
        const tags = await db.select().from('tags');
        d(`Fetched ${tags.length} tags`);
        event.sender.send('FETCH_TAGS_SUCCESS', tags);
    } catch (err) {
        console.error(err);
        event.sender.send('FETCH_TAGS_ERROR', err);
    }
});

ipcMain.on('FETCH_ITEMS', async (event, path) => {
    d(`Fetching Items in ${path}`);
    try {
        const items = await fetch(path);
        d(`Fetched ${items.length} Items`);
        event.sender.send('FETCH_ITEMS', items);
    } catch (err) {
        console.error(err);
    }
});

ipcMain.on('OPEN_ITEM', (event, path) => {
    d(`Opening file ${path}`);
    shell.openItem(path);
});

ipcMain.on('CREATE_FILE', async (event, {path, filename}) => {
    const file = join(path, filename);
    d(`Creating file ${path}`);
    if (existsSync(file)) {
        d(`File ${file} already exists`);
        event.sender.send('CREATE_FILE_ERROR', {code: 'FILE_ALREADY_EXISTS'});
        return;
    }
    try {
        await writeFile(file, '', 'utf8');
        d(`File ${file} created`);
        event.sender.send('CREATE_FILE_SUCCESS');
    } catch (err) {
        console.error(err);
        event.sender.send('CREATE_FILE_ERROR', err);
    }
});
