exports.up = async function(knex) {
    const exists = await knex.schema.hasTable('usuarios')
    if(!exists) {
        return knex.schema.createTable('usuarios', table => {
            table.increments('id').primary()
            table.string('nome').notNull()
            table.string('email').notNull().unique()
            table.string('senha', 60).notNull()
            table.boolean('ativo').notNull().defaultTo(true)
            table.timestamp('data_criacao').defaultTo(knex.fn.now())
        })
    }
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('usuarios')
};
