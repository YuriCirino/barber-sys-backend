
exports.up = function(knex) {
    return knex.schema.createTable('services', table =>{
        table.increments('id')
        table.string('name').notNull()
        table.integer('time')//in minutes
    })
  
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('services')
};
