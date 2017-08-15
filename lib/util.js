const isDevEnv = () => process.defaultApp ||
        /[\\/]electron-prebuilt[\\/]/.test(process.execPath) ||
        /[\\/]electron[\\/]/.test(process.execPath);

module.exports = {
    isDevEnv
};
