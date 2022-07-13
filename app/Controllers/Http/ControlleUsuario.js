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

    async login({ request, response, params, auth}){
        const usuario = request.all()
        return response.json(await this.serviceUsuario.login(usuario, auth))
    }

    async findAll({ request, response }) {
        return response.json(await this.serviceUsuario.findAll())
    }
    
    async findById({ request, response, params }) {
        const usuario = request.all()
        usuario.id = params.id
        return response.json(await this.serviceUsuario.findById(usuario))
    }
}

module.exports = ControlleUsuario