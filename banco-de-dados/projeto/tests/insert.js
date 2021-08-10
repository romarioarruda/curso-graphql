const db = require('../config/db')

const logError = (code) => {
    let msg = 'Ocorreu um erro inesperado.';

    if (code === 'ER_DUP_ENTRY') {
        msg = 'Informação já existe no banco de dados.'
    }

    return msg
}

const novoPerfil = {
    nome: 'master',
    rotulo: 'Master'
}

db('perfis')
    .insert(novoPerfil)
    .then(resp => console.log(`ID inserido: ${resp[0]}`))
    .catch(err => console.log(logError(err.code)))
    .finally(_ => db.destroy())
