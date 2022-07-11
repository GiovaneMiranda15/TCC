class ControlleUsuario {
    insert(request, response) {
        console.log("Inserir usuarios")
    }
    update(request, response) {
        console.log("Atualizar usuário")
    }
    delete(request, response) {
        console.log("Inativa Usuário")
    }
    findAll(request, response) {
        console.log("Buscar usuários")
    }
    findById(request, response) {
        console.log("Buscar usuário por id")
    }
}

module.exports = ControlleUsuario