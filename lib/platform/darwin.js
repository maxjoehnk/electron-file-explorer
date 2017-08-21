const { exec } = require('child_process');
const d = require('debug')('file-explorer:platform:darwin');

const getMimetype = path => new Promise((resolve, reject) => {
    d(`Fetching Mimetype for ${path}`);
    exec(`file --mime-type --brief "${path}"`, (err, stdout) => {
        if (err) {
            return reject(err);
        }
        return resolve(stdout.trim());
    });
});

const getType = path => new Promise((resolve, reject) => {
    d(`Fetching Type for ${path}`);
    exec(`file --brief "${path}"`, (err, stdout) => {
        if (err) {
            return reject(err);
        }
        const [type] = stdout.split('data');
        return resolve(type.trim());
    });
});

module.exports = {
    getMimetype,
    getType
};
