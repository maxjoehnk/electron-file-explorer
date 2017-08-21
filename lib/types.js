const minimatch = require('minimatch');
const {getMimetype, getType} = require('./platform');
const {db} = require('./db');
const d = require('debug')('file-explorer:types');

const globOptions = {
    dot: true,
    nocase: true
};

const getTypes = async () => {
    d('fetching types from db');
    const patterns = await db
        .from('patterns')
        .join('types', {'patterns.type_id': 'types.id'})
        .join('categories', {'types.category_id': 'categories.id'})
        .select('pattern', 'types.label as type', 'categories.label as category', 'types.color as t_color', 'types.icon as t_icon', 'categories.color as c_color', 'categories.icon as c_icon');
    d('mapping types');
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

const getTypeData = async (types, {path, filename, directory}) => {
    d(`fetching type data for ${path}`);
    const dbType = types.find(({pattern}) =>
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

module.exports = {
    getTypeData,
    getTypes
};
