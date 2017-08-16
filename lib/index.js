const { app, BrowserWindow, ipcMain, shell } = require('electron');
const { isDevEnv, getIcon, getType } = require('./util');
const { join, extname } = require('path');
const promisify = require('promisify-node');
const { readdir, stat } = promisify('fs');

let window;

const start = () => {

    ipcMain.on('FETCH_ITEMS', (event, path) => {
        fetch(path)
            .then(items => event.sender.send('FETCH_ITEMS', items))
            .catch(err => console.error(err));
    });

    ipcMain.on('OPEN_ITEM', (event, path) => {
        shell.openItem(path);
    });

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

const getColor = file => {
    const type = getType(file);
    switch (type) {
        case 'image':
            return '#009688';
        case 'video':
            return '#F44336';
        default:
            return 'rgba(0, 0, 0, 0.54)';
    }
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
