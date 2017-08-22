const d = require('debug')('file-explorer:util');

const isDevEnv = () => process.defaultApp ||
    /[\\/]electron-prebuilt[\\/]/.test(process.execPath) ||
    /[\\/]electron[\\/]/.test(process.execPath);

const isWindows = () => process.platform === 'win32';

const isArchive = path => /\.(zip|tar\.gz|tar)$/.test(path);

module.exports = {
    isDevEnv,
    isWindows,
    isArchive
};
