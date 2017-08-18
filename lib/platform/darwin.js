const { exec } = require('child_process');

const getMimetype = path => new Promise((resolve, reject) => {
    exec(`file --mime-type --brief "${path}"`, (err, stdout) => {
        if (err) {
            return reject(err);
        }
        return resolve(stdout.trim());
    });
});

const getType = path => new Promise((resolve, reject) => {
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
