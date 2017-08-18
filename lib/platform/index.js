const { lookup } = require('mime-types');

const polyfill = {
    getMimetype: async path => lookup(path),
    getType: async() => undefined
};

let native = {};
switch (process.platform) {
    case 'darwin':
        native = require('./darwin');
        break;
}

module.exports = Object.assign({}, polyfill, native);
