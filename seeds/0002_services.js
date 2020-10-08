
exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('services').del()
      .then(function () {
        // Inserts seed entries
        return knex('services').insert([
          {name: 'Cabelo',time:30},
          {name: 'Barba',time:15},
          {name: 'Selagem',time:15}
        ]);
      });
  };
  