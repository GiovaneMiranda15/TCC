const ServiceUsuario = require('../../Service/ServiceUsuario')

class ControlleUsuario {
    constructor() {
        this.serviceUsuario = new ServiceUsuario()
    }

    async insert({ request, response }) {
        const usuario = request.all()
        return response.json(await this.serviceUsuario.insert(usuario))
    }

    async update({ request, response, params }) {
        const usuario = request.all()
        usuario.id = params.id
        return response.json(await this.serviceUsuario.update(usuario))
    }
    async delete({ request, response, params }) {
        const usuario = request.all()
        usuario.id = params.id
        return response.json(await this.serviceUsuario.delete(usuario))
    }
    findAll({ request, response }) {
        console.log("Buscar usuários")
    }
    findById({ request, response }) {
        console.log("Buscar usuário por id")
    }
}

module.exports = ControlleUsuario