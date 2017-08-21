const {app, BrowserWindow} = require('electron');
const {isDevEnv} = require('./util');
const {join} = require('path');
const {setup} = require('./db');
require('./ipc');
const d = require('debug')('file-explorer:index');

let main;

const start = () => {
    prepareDevEnv();
    main = openWindow();
};

const openWindow = () => {
    const url = `file://${join(__dirname, '../build')}/index.html`;
    const window = new BrowserWindow({
        frame: false
    });
    window.loadURL(url);
    if (isDevEnv()) {
        window.webContents.openDevTools()
    }
    return window;
};

const prepareDevEnv = async () => {
    d('Installing Devtools');
    const {
        default: installExtension,
        REDUX_DEVTOOLS
    } = require('electron-devtools-installer');
    try {
        await installExtension([
            REDUX_DEVTOOLS
        ]);
        d('Successfully installed Devtools');
    } catch (err) {
        console.error(err);
    }
};

app.on('ready', start);

setup()
    .then(() => console.log('Setup complete'))
    .catch(err => {
        process.exit(1);
        console.error(err);
    });
