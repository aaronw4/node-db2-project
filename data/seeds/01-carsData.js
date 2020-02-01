
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {
          VIN: '007ASTONMARTIN',
          make: 'Mazda',
          model: '3',
          mileage: 50000,
          transmission: 'automatic',
          titleStatus: 'clean'
        }
      ]);
    });
};
