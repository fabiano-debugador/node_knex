
exports.up = knex =>  knex.schema.createTable('projects', table => {
    table.increments('id')
    table.text('title')

    // relationship

    table.integer('user_id')
        .references('user.id')
        .notNullable()
        .onDelete('CASCADE')
        
    table.timestamps(true, true)
})

exports.down = knex => knex.schema.dropTable('projects')
