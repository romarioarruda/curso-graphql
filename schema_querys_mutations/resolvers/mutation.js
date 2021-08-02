let id = 0

module.exports = {
    novoUsuario(_, args) {
        return { id: id++, ...args }
    }
}