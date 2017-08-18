
exports.seed = async function(knex, Promise) {
    await knex('categories').del();
    await knex('categories').insert([
        {
            id: 'a2f83ef8-8357-11e7-bd5d-2cf0ee15620c',
            label: 'Images',
            color: '#009688',
            icon: 'mdi-file-image'
        },
        {
            id: 'a97db5aa-8357-11e7-9a9f-2cf0ee15620c',
            label: 'Videos',
            color: '#f44336',
            icon: 'mdi-file-video'
        },
        {
            id: 'af54716c-8357-11e7-801e-2cf0ee15620c',
            label: 'Music',
            color: '#ffc107',
            icon: 'mdi-file-music'
        },
        {
            id: '5e895f32-222d-4453-88a6-29f163b0a507',
            label: 'Documents',
            color: null,
            icon: 'mdi-file-document'
        },
        {
            id: 'c01a4562-8357-11e7-a44a-2cf0ee15620c',
            label: 'Folders',
            color: null,
            icon: 'mdi-folder'
        },
        {
            id: 'c5d4f7e6-4707-46ec-974f-f6bf84c3658f',
            label: 'Developer',
            color: null,
            icon: 'mdi-file-xml'
        },
        {
            id: 'b433d863-6e20-4fcb-a9bc-da391afd70cd',
            label: 'Archive',
            color: '#795548',
            icon: 'mdi-zip-box'
        },
        {
            id: 'e3fbb77b-1dab-4f48-b86e-b62c33a9ab51',
            label: 'Other',
            color: null,
            icon: 'mdi-file'
        },
        {
            id: 'b7e17e31-adc0-4eb2-8457-324e9caf71f1',
            label: 'Application',
            color: null,
            icon: 'mdi-application'
        }
    ]);
};
