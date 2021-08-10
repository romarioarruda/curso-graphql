const db = require('../config/db')

const novoPerfil = {
    nome: 'Visitante',
    rotulo: 'Visitante'
}

db('perfis')
    .update(novoPerfil)
    .where({ id: 18 })
    .then(resp => console.log(resp))
    .catch(err => console.log(err))
    .finally(_ => db.destroy())