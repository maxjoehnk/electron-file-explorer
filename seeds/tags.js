exports.seed = function (knex) {
    return knex('tags')
        .del()
        .then(function () {
            return knex('tags').insert([
                {
                    id: 1,
                    label: 'University',
                    color: '#FF5722'
                }
            ]);
        });
};
