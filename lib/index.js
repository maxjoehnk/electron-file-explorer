const { app, BrowserWindow, ipcMain, shell } = require('electron');
const { isDevEnv } = require('./util');
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

const getIcon = ({ filename, directory, hidden }) => {
    if (directory) {
        if (extname(filename) === '.app') {
            return 'mdi-application';
        }
        if (filename === 'node_modules') {
            return 'mdi-nodejs';
        }
        if (filename === '.vscode') {
            return 'mdi-visualstudio';
        }
        return 'mdi-folder';
    }
    switch (extname(filename)) {
        case '.wav':
        case '.mp3':
        case '.ogg':
            return 'mdi-file-music';
        case '.png':
        case '.jpg':
        case '.jpeg':
        case '.psd':
        case '.gif':
            return 'mdi-file-image';
        case '.mp4':
        case '.wmv':
        case '.mov':
            return 'mdi-file-video';
        case '.pdf':
            return 'mdi-file-pdf';
        case '.txt':
            return 'mdi-file-document';
        case '.js':
        case '.jsx':
            return 'mdi-language-javascript';
        case '.html':
            return 'mdi-language-html5';
        case '.ts':
            return 'mdi-language-typescript';
        case '.py':
            return 'mdi-language-python';
        case '.svg':
            return 'mdi-svg';
        case '.c':
        case '.h':
            return 'mdi-language-c';
        case '.cpp':
        case '.hpp':
            return 'mdi-language-cpp';
        case '.css':
            return 'mdi-language-css3';
        case '.php':
            return 'mdi-language-php';
        case '.md':
            return 'mdi-markdown';
        case '.json':
            return 'mdi-json';
        case '.sh':
        case '.yml':
        case '.xml':
            return 'mdi-file-xml';
        case '.exe':
            return 'mdi-application';
        case '.zip':
            return 'mdi-zip-box';
        default:
            return hidden ? 'mdi-file-hidden' : 'mdi-file';
    }
};

const getType = ({ filename, directory }) => {
    if (directory) {
        return 'folder';
    }
    switch (extname(filename)) {
        case '.mp4':
        case '.wmv':
        case '.mov':
            return 'video';
        case '.jpg':
        case '.jpeg':
        case '.png':
        case '.gif':
            return 'image';
        case '.json':
        case '.sh':
        case '.yml':
        case '.xml':
        case '.txt':
        case '.js':
        case '.jsx':
        case '.html':
        case '.ts':
        case '.py':
        case '.svg':
        case '.c':
        case '.h':
        case '.cpp':
        case '.hpp':
        case '.css':
        case '.php':
        case '.md':
            return 'text';
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
    return dir
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
        .sort(({ filename: a }, { filename: b }) => a.localeCompare(b))
        .sort(({ directory: a }, { directory: b}) => a ? -1 : 1);
};

app.on('ready', start);
