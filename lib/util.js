const minimatch = require('minimatch');
const icons = require('./icons.json');
const types = require('./types.json');
const colors = require('./colors.json');

const typePatterns = {};

const globOptions = {
    dot: true,
    nocase: true
};

Object.getOwnPropertyNames(types.types)
    .forEach(type => {
        types.types[type].forEach(pattern => {
            typePatterns[pattern] = type;
        });
    });

const isDevEnv = () => process.defaultApp ||
        /[\\/]electron-prebuilt[\\/]/.test(process.execPath) ||
        /[\\/]electron[\\/]/.test(process.execPath);

const getIcon = ({ filename, directory, hidden }) => {
    const icon = Object.getOwnPropertyNames(icons.names)
        .find(pattern => minimatch(filename, pattern, globOptions));
    if (icon) {
        return icons.names[icon];
    }
    const type = getType({ filename, directory });
    const typeIcon = icons.types[type];
    if (typeIcon) {
        return typeIcon;
    }
    if (hidden) {
        return icons.hidden;
    }
    return icons.default;
};

const getType = ({ filename, directory }) => {
    if (directory) {
        return 'folder';
    }
    const pattern = Object
        .getOwnPropertyNames(typePatterns)
        .find(pattern => minimatch(filename, pattern, globOptions));
    if (pattern) {
        return typePatterns[pattern];
    }
    return undefined;
};

const getColor = ({ filename, directory }) => {
    const color = Object.getOwnPropertyNames(colors.names)
        .find(pattern => minimatch(filename, pattern, globOptions));
    if (color) {
        return colors.names[color];
    }
    const type = getType({ filename, directory });
    const typeColor = colors.types[type];
    if (typeColor) {
        return typeColor;
    }
    return colors.default;
};


module.exports = {
    isDevEnv,
    getIcon,
    getType,
    getColor
};
