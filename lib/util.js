const minimatch = require('minimatch');
const { getMimetype, getType } = require('./platform');

const globOptions = {
    dot: true,
    nocase: true
};

const isDevEnv = () => process.defaultApp ||
        /[\\/]electron-prebuilt[\\/]/.test(process.execPath) ||
        /[\\/]electron[\\/]/.test(process.execPath);

const getTypes = async db => {
    const patterns = await db
        .from('patterns')
        .join('types', { 'patterns.type_id': 'types.id' })
        .join('categories', { 'types.category_id': 'categories.id' })
        .select('pattern', 'types.label as type', 'categories.label as category', 'types.color as t_color', 'types.icon as t_icon', 'categories.color as c_color', 'categories.icon as c_icon');

    return patterns.map(({
        pattern,
        t_color,
        t_icon,
        c_color,
        c_icon,
        type,
        category
    }) => ({
        pattern,
        type,
        category,
        color: t_color || c_color || 'rgba(0, 0, 0, 0.54)',
        icon: t_icon || c_icon || 'mdi-file'
    }));
};

const getTypeData = async(types, { path, filename, directory }) => {
    const dbType = types.find(({ pattern }) =>
        minimatch(filename, pattern, globOptions)) || {};
    const mimetype = await getMimetype(path);
    const type = await getType(path);
    const defaults = {
        color: 'rgba(0, 0, 0, 0.54)',
        icon: directory ? 'mdi-folder' : 'mdi-file',
        type: type || 'Other',
        category: 'Other',
        mimetype
    };
    return Object.assign({}, defaults, dbType);
};

const isWindows = () => process.platform === 'win32';

module.exports = {
    isDevEnv,
    getTypeData,
    getTypes,
    isWindows
};
