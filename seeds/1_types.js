
exports.seed = async function (knex, Promise) {
    await knex('types').del();
    await knex('types').insert([
        {
            id: 'ed3dcb4f-07d3-421f-aee7-206bc8073ef3',
            category_id: 'a2f83ef8-8357-11e7-bd5d-2cf0ee15620c',
            label: 'JPEG Image',
            color: null,
            icon: null
        },
        {
            id: 'db8add52-2972-46a7-985a-f703aa977564',
            category_id: 'a2f83ef8-8357-11e7-bd5d-2cf0ee15620c',
            label: 'PNG Image',
            color: null,
            icon: null
        },
        {
            id: '7afb35db-50f0-4654-a681-7386b89c88ca',
            category_id: 'a2f83ef8-8357-11e7-bd5d-2cf0ee15620c',
            label: 'GIF Image',
            color: null,
            icon: null
        },
        {
            id: '26cf3631-b691-4377-be84-8d36277cc3ba',
            category_id: 'a2f83ef8-8357-11e7-bd5d-2cf0ee15620c',
            label: 'TIFF Image',
            color: null,
            icon: null
        },
        {
            id: 'e554f3f3-d2b8-43c5-b2db-0484504df811',
            category_id: 'af54716c-8357-11e7-801e-2cf0ee15620c',
            label: 'MPEG Audio Layer 3',
            color: null,
            icon: null
        },
        {
            id: '00e62dc9-0716-4e89-ae87-cceb8c3dd74f',
            category_id: 'af54716c-8357-11e7-801e-2cf0ee15620c',
            label: 'WAVE Audio File',
            color: null,
            icon: null
        },
        {
            id: 'ed23fc6e-488f-432b-a355-a1a9c22a01e1',
            category_id: 'af54716c-8357-11e7-801e-2cf0ee15620c',
            label: 'OGG Audio File',
            color: null,
            icon: null
        },
        {
            id: 'ad8f44bc-1bdb-4f81-9be5-612174f54ef2',
            category_id: 'af54716c-8357-11e7-801e-2cf0ee15620c',
            label: 'FLAC Audio File',
            color: null,
            icon: null
        },
        {
            id: '3db5b1cb-0c30-4a47-9462-4915d0c41a2b',
            category_id: 'af54716c-8357-11e7-801e-2cf0ee15620c',
            label: 'WMA Audio File',
            color: null,
            icon: null
        },
        {
            id: '5a205b61-003d-4cd9-856f-f73d303db8a1',
            category_id: 'af54716c-8357-11e7-801e-2cf0ee15620c',
            label: 'MPEG 4 Audio',
            color: null,
            icon: null
        },
        {
            id: 'c3a99e53-1c2e-4875-aaa8-cdcb769137e1',
            category_id: 'b7e17e31-adc0-4eb2-8457-324e9caf71f1',
            label: 'Application',
            color: null,
            icon: null
        },
        {
            id: 'bfadba05-fc18-4763-bbf4-87eed3deb2aa',
            category_id: 'b433d863-6e20-4fcb-a9bc-da391afd70cd',
            label: 'ZIP Archive',
            color: null,
            icon: null
        },
        {
            id: '1bba8d71-6d23-4f8a-80b6-b0a7724c09d4',
            category_id: 'b433d863-6e20-4fcb-a9bc-da391afd70cd',
            label: 'RAR Archive',
            color: null,
            icon: null
        },
        {
            id: '55a81bf8-6748-41aa-bc20-ed1a531a0794',
            category_id: 'c5d4f7e6-4707-46ec-974f-f6bf84c3658f',
            label: 'JSON',
            color: null,
            icon: 'mdi-json'
        },
        {
            id: 'cce4bca1-0104-439a-ae81-2d8dee543cf5',
            category_id: 'c5d4f7e6-4707-46ec-974f-f6bf84c3658f',
            label: 'C Source',
            color: null,
            icon: 'mdi-language-c'
        },
        {
            id: 'feae24b2-1aa8-4994-a422-ca4f3115b3df',
            category_id: 'c5d4f7e6-4707-46ec-974f-f6bf84c3658f',
            label: 'C Header',
            color: null,
            icon: 'mdi-language-h'
        },
        {
            id: 'de6a508d-3725-469e-b818-ba21477a51ef',
            category_id: 'c5d4f7e6-4707-46ec-974f-f6bf84c3658f',
            label: 'C++ Source',
            color: null,
            icon: 'mdi-language-cpp'
        },
        {
            id: '4c27491c-c089-4f8c-838d-3acafeeaa04b',
            category_id: 'c5d4f7e6-4707-46ec-974f-f6bf84c3658f',
            label: 'C++ Header',
            color: null,
            icon: 'mdi-language-cpp'
        },
        {
            id: '6e8e0b2d-e096-4a8a-9fe3-96e7f42909ae',
            category_id: 'c5d4f7e6-4707-46ec-974f-f6bf84c3658f',
            label: 'Typescript',
            color: 'rgb(26, 112, 198)',
            icon: 'mdi-language-typescript'
        },
        {
            id: '57456ed1-8c4d-4cc4-9820-706a803fd6d7',
            category_id: 'c5d4f7e6-4707-46ec-974f-f6bf84c3658f',
            label: 'CSS',
            color: 'rgb(0, 143, 214)',
            icon: 'mdi-language-css3'
        },
        {
            id: 'ca6af7f8-7a56-47f6-9eea-02e4cc7caa1d',
            category_id: 'c5d4f7e6-4707-46ec-974f-f6bf84c3658f',
            label: 'Markdown',
            color: null,
            icon: 'mdi-markdown'
        },
        {
            id: '25e25797-2150-43cc-ac2d-67f58afef2bf',
            category_id: 'c5d4f7e6-4707-46ec-974f-f6bf84c3658f',
            label: 'PHP',
            color: 'rgb(122, 117, 181)',
            icon: 'mdi-language-php'
        },
        {
            id: '1b904220-04d2-49cc-b885-e3123c6945e8',
            category_id: 'c5d4f7e6-4707-46ec-974f-f6bf84c3658f',
            label: 'HTML',
            color: 'rgb(244, 41, 0)',
            icon: 'mdi-language-html5'
        },
        {
            id: '51c798b7-8f7c-4505-8e67-cc370c317ae4',
            category_id: 'c5d4f7e6-4707-46ec-974f-f6bf84c3658f',
            label: 'Python',
            color: 'rgb(23, 63, 93)',
            icon: 'mdi-language-python'
        },
        {
            id: '0a8fc98d-f7c6-4838-8cbd-7cdaa2680d43',
            category_id: 'a97db5aa-8357-11e7-9a9f-2cf0ee15620c',
            label: 'Apple QuickTime Container',
            color: null,
            icon: null
        },
        {
            id: '1c2669d2-c921-49e0-8f53-0c8cd54cc97b',
            category_id: 'a97db5aa-8357-11e7-9a9f-2cf0ee15620c',
            label: 'MP4',
            color: null,
            icon: null
        },
        {
            id: '5a0d37ce-f89e-4ac6-b396-3b1b68ea4288',
            category_id: '5e895f32-222d-4453-88a6-29f163b0a507',
            label: 'PDF',
            color: '#f44336',
            icon: 'mdi-file-pdf'
        }
    ]);
};
