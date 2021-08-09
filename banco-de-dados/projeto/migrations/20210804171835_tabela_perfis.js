exports.up = async function(knex) {
    const exists = await knex.schema.hasTable('perfis')

    if(!exists) {
      const newTable = await knex.schema.createTable('perfis', table => {
        table.increments('id').primary()
        table.string('nome').notNull().unique()
        table.string('rotulo').notNull()
      })
      
      if (!newTable) return

      return knex('perfis').insert([
        { nome: 'comum', rotulo: 'Comum' },
        { nome: 'admin', rotulo: 'Administrador' },
        { nome: 'master', rotulo: 'Master' },
      ])
    }
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('perfis')
};
