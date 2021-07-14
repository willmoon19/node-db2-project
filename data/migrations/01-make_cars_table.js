exports.up = function (knex) {
  return knex.schema
    .createTable('cars', table => {
      table.increments('car_id')
      table.text('vin', 128).notNullable().unique()
      table.text('make').notNullable()
      table.text('model').notNullable()
      table.decimal('mileage').notNullable()
      table.text('title')
      table.text('transmission')
    })
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists('cars')
};
