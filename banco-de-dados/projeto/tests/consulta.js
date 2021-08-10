const db = require('../config/db')

db('perfis')
    .select('id', 'rotulo')
    .limit(10)
    .then(resp => console.log(resp))
    .catch(err => console.log(err))
    .finally(_ => db.destroy())