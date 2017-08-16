const {homedir} = require('os');

exports.seed = function (knex) {
    const home = homedir();
    return knex('favorites')
        .del()
        .then(function () {
            return knex('favorites').insert([
                {
                    id: 1,
                    label: 'Desktop',
                    icon: 'mdi-desktop-mac',
                    path: `${home}/Desktop`
                },
                {
                    id: 2,
                    label: 'Documents',
                    icon: 'mdi-file-multiple',
                    path: `${home}/Documents`
                },
                {
                    id: 3,
                    label: 'Downloads',
                    icon: 'mdi-cloud-download',
                    path: `${home}/Downloads`
                },
                {
                    id: 4,
                    label: 'Home',
                    icon: 'mdi-home',
                    path: home
                },
            ]);
        });
};
