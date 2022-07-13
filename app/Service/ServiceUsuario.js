const Usuario = require('../Entity/Usuario');

class ServiceUsuario {
    constructor() {
        this.user = new Usuario()
    }

    async insert(newUsuario) {
        let u = new Usuario()
        if (!u.setCpf(newUsuario.cpf ? newUsuario.cpf.replace(/[^0-9]/g, '') : null)) return ({ success: false, message: "CPF não informado ou inválido" });
        if (!u.setNome(newUsuario.nome)) return ({ success: false, message: "Nome não informado" });
        if (!u.setEmail(newUsuario.email)) return ({ success: false, message: "Email não informado ou inválido" });
        if (!u.setSenha(newUsuario.senha)) return ({ success: false, message: "Senha não informada" });
        if (!u.setTipo(newUsuario.tipo)) return ({ success: false, message: "Tipo não informado" });
        if (!u.setProfissionalId(newUsuario.profissional_id)) return ({ success: false, message: "Profissional não informado" });
        if (!u.setCreatedBy(newUsuario.created_by)) return ({ success: false, message: "Usuário inválido" });
        if (newUsuario.permission === 2 || (u.getTipo() === 0 && newUsuario.permission != 0)) {
            return ({ success: false, message: "Usuário sem permissão" })
        }
        return await this.user.insert(u).then((res) => {
            if (res == false) {
                return ({ success: false, message: "Já existe um usuário com esse email cadastrado" })
            } else {
                return ({ success: true, message: "Usuário cadastrado com sucesso" })
            }
        }).catch((err) => {
            return ({ success: false, message: err });
        });
    }

    async update(newUsuario) {
        let u = new Usuario()
        if (!u.setId(newUsuario.id)) return ({ success: false, message: "Id inválido" });
        if (!u.setCpf(newUsuario.cpf ? newUsuario.cpf.replace(/[^0-9]/g, '') : null)) return ({ success: false, message: "CPF não informado ou inválido" });
        if (!u.setNome(newUsuario.nome)) return ({ success: false, message: "Nome não informado" });
        if (!u.setEmail(newUsuario.email)) return ({ success: false, message: "Email não informado ou inválido" });
        if (!u.setSenha(newUsuario.senha)) return ({ success: false, message: "Senha não informada" });
        if (!u.setUpdatedBy(newUsuario.updated_by)) return ({ success: false, message: "Usuário inválido" });
        if (newUsuario.permission === 2 || (u.getTipo() === 0 && newUsuario.permission != 0)) {
            return ({ success: false, message: "Usuário sem permissão" })
        }
        return await this.user.update(u).then((res) => {
            if (res == false) {
                return ({ success: false, message: "Nenhum usuário encontrado" })
            } else {
                return ({ success: true, message: "Usuário atualizado com sucesso" })
            }
        }).catch((err) => {
            return ({ success: false, message: err })
        });
    }

    async delete(newUsuario) {
        let u = new Usuario()
        if (!u.setId(newUsuario.id)) return ({ success: false, message: "Id inválido" });
        if (!u.setTipo(newUsuario.tipo)) return ({ success: false, message: "Tipo não informado" });
        if (!u.setDeletedBy(newUsuario.deleted_by)) return ({ success: false, message: "Usuário inválido" });
        if (newUsuario.permission === 2 || (u.getTipo() === 0 && newUsuario.permission != 0)) {
            return ({ success: false, message: "Usuário sem permissão" })
        }
        return await this.user.delete(u).then((res) => {
            if (res == false) {
                return ({ success: false, message: "Nenhum usuário encontrado" })
            } else {
                return ({ success: true, message: "Usuário deletado com sucesso" })
            }
        }).catch((err) => {
            return ({ success: false, message: err })
        });
    }

    async findAll(){
        try {
            return await this.user.select().then((res)=>{
                return ({success:true, message: res})
            }).catch((err)=>{
                return ({success:false, message: err})
            });
        } catch (error) {
            return ({success:false, message: "Falha interna do servidor"})
        }
    }

    async findById(newUsuario){
        let u = new Usuario()
        if (!u.setId(newUsuario.id)) return ({ success: false, message: "Id inválido" });
        try {
            return await this.user.selectById(u).then((res)=>{
                if(res.length>0){
                    return ({success:true, message: res})
                }else{
                    return ({success:false, message: "Nenhum usuário encontrado"})
                }
            }).catch((err)=>{
                return ({success:false, message: err})
            });
        } catch (error) {
            return ({success:false, message: "Falha interna do servidor"})
        }
    }

    async login(newUsuario, auth) {
        let u = new Usuario()
        if (!u.setEmail(newUsuario.email)) return ({ success: false, message: "Email não informado ou inválido" });
        if (!u.setSenha(newUsuario.senha)) return ({ success: false, message: "Senha não informada" });
        try {
            let token = await auth.attempt(u.getEmail(), u.getSenha())
            let user = await this.user.selectByEmail(u)
            if (user) {
                return ({
                    success: true,
                    message: "Acesso autorizado",
                    data: {
                        user: user,
                        token: token.token
                    }
                })
            }
        } catch (error) {
            if (error && error.uidField && error.passwordField) {
                return ({
                    success: false,
                    message: 'Acesso negado usuário não encontrado! CPF/ou senha inválido(s).',
                });
            } else if (error && error.passwordField) {
                return ({
                    success: false,
                    message: 'Acesso negado! Senha inválida.',
                })
            } else {
                return ({
                    success: false,
                    message: "Falha interna do servidor",
                });
            }
        }
    }
}

module.exports = ServiceUsuario