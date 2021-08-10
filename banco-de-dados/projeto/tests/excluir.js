const db = require('../config/db')

db('perfis')
    .delete()
    .where({ id: 19 })
    .then(resp => console.log(resp))
    .catch(err => console.log(err))
    .finally(_ => db.destroy())