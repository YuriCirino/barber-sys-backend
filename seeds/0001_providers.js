
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('providers').del()
    .then(function () {
      // Inserts seed entries
      return knex('providers').insert([
        {name: 'João Navalha'},
        {name: 'John Razzor'},
        {name: 'Mayk Knife'}
      ]);
    });
};
