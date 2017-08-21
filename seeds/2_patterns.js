
exports.seed = async function (knex, Promise) {
    await knex('patterns').del();
    await knex('patterns').insert([
        {
            type_id: 'ed3dcb4f-07d3-421f-aee7-206bc8073ef3',
            pattern: '*.jpg'
        },
        {
            type_id: 'ed3dcb4f-07d3-421f-aee7-206bc8073ef3',
            pattern: '*.jpeg'
        },
        {
            type_id: 'db8add52-2972-46a7-985a-f703aa977564',
            pattern: '*.png'
        },
        {
            type_id: '7afb35db-50f0-4654-a681-7386b89c88ca',
            pattern: '*.gif'
        },
        {
            type_id: '26cf3631-b691-4377-be84-8d36277cc3ba',
            pattern: '*.tif'
        },
        {
            type_id: 'e554f3f3-d2b8-43c5-b2db-0484504df811',
            pattern: '*.mp3'
        },
        {
            type_id: '00e62dc9-0716-4e89-ae87-cceb8c3dd74f',
            pattern: '*.wav'
        },
        {
            type_id: 'ed23fc6e-488f-432b-a355-a1a9c22a01e1',
            pattern: '*.ogg'
        },
        {
            type_id: 'ad8f44bc-1bdb-4f81-9be5-612174f54ef2',
            pattern: '*.flac'
        },
        {
            type_id: '3db5b1cb-0c30-4a47-9462-4915d0c41a2b',
            pattern: '*.wma'
        },
        {
            type_id: '5a205b61-003d-4cd9-856f-f73d303db8a1',
            pattern: '*.m4a'
        },
        {
            type_id: 'bfadba05-fc18-4763-bbf4-87eed3deb2aa',
            pattern: '*.zip'
        },
        {
            type_id: '1bba8d71-6d23-4f8a-80b6-b0a7724c09d4',
            pattern: '*.rar'
        },
        {
            type_id: '55a81bf8-6748-41aa-bc20-ed1a531a0794',
            pattern: '*.json'
        },
        {
            type_id: 'cce4bca1-0104-439a-ae81-2d8dee543cf5',
            pattern: '*.c'
        },
        {
            type_id: 'feae24b2-1aa8-4994-a422-ca4f3115b3df',
            pattern: '*.h'
        },
        {
            type_id: 'de6a508d-3725-469e-b818-ba21477a51ef',
            pattern: '*.cpp'
        },
        {
            type_id: '4c27491c-c089-4f8c-838d-3acafeeaa04b',
            pattern: '*.hpp'
        },
        {
            type_id: '6e8e0b2d-e096-4a8a-9fe3-96e7f42909ae',
            pattern: '*.ts'
        },
        {
            type_id: '57456ed1-8c4d-4cc4-9820-706a803fd6d7',
            pattern: '*.css'
        },
        {
            type_id: 'ca6af7f8-7a56-47f6-9eea-02e4cc7caa1d',
            pattern: '*.md'
        },
        {
            type_id: '25e25797-2150-43cc-ac2d-67f58afef2bf',
            pattern: '*.php'
        },
        {
            type_id: '1b904220-04d2-49cc-b885-e3123c6945e8',
            pattern: '*.html'
        },
        {
            type_id: '51c798b7-8f7c-4505-8e67-cc370c317ae4',
            pattern: '*.py'
        },
        {
            type_id: '0a8fc98d-f7c6-4838-8cbd-7cdaa2680d43',
            pattern: '*.mov'
        },
        {
            type_id: '1c2669d2-c921-49e0-8f53-0c8cd54cc97b',
            pattern: '*.mp4'
        },
        {
            type_id: '5a0d37ce-f89e-4ac6-b396-3b1b68ea4288',
            pattern: '*.pdf'
        }
    ]);
};
