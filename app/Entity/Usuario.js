"use strict";
const UsuarioModel = use('App/Models/User')
const moment = require('moment')

class Usuario {
    id;
    nome;
    cpf;
    email;
    senha;
    tipo;
    profissional_id;
    created_at;
    created_by;
    updated_at;
    updated_by;
    deleted_at;
    deleted_by;

    constructor(){
        this.hash = use('Hash')
    }

    setId(id) {
        if (id && isFinite(id) && id > 0) {
            this.id = id;
            return true;
        } else {
            return false
        }
    }

    getId() {
        return this.id;
    }

    setNome(nome) {
        if (nome && nome.length > 0) {
            this.nome = nome;
            return true;
        }
        return false;
    }

    getNome() {
        return this.nome;
    }

    setCpf(cpf) {
        let valida = /^[0-9]{3}.?[0-9]{3}.?[0-9]{3}-?[0-9]{2}/
        if (cpf) {
            if (valida.test(cpf) && cpf.length == 11) {
                this.cpf = cpf;
                return true;
            } else {
                return false
            }
        } else {
            return true
        }
    }

    getCpf() {
        return this.cpf;
    }

    setEmail(email) {
        let valida = /\S+@\S+\.\S+/;
        if (valida.test(email)) {
            this.email = email;
            return true;
        }
        return false;
    }

    getEmail() {
        return this.email;
    }

    setSenha(senha) {
        if (senha && senha.length > 0) {
            this.senha = senha;
            return true;
        } else {
            return false;
        }
    }

    getSenha() {
        return this.senha;
    }

    setTipo(tipo) {
        if (tipo === 0 || tipo === 1 || tipo === 2) {
            this.tipo = tipo;
            return true;
        } else {
            return false;
        }
    }

    getTipo() {
        return this.tipo;
    }

    setProfissionalId(profissional_id) {
        if (this.tipo === 2) {
            if (isFinite(profissional_id)) {
                this.profissional_id = profissional_id;
                return true;
            } else {
                return false;
            }
        } else {
            return true;
        }

    }

    getProfissionalId() {
        return this.profissional_id;
    }

    setCreatedAt(created_at) {
        this.created_at = created_at;
    }

    getCreatedAt() {
        return this.created_at;
    }

    setUpdatedAt(updated_at) {
        this.updated_at = updated_at;
    }

    getUpdatedAt() {
        return this.updated_at;
    }

    setDeletedAt(deleted_at) {
        this.deleted_at = deleted_at;
    }

    getDeletedAt() {
        return this.deleted_at;
    }

    setCreatedBy(created_by) {
        if (created_by && created_by.length > 0) {
            this.created_by = created_by;
            return true;
        } else {
            return false;
        }
    }

    getCreatedBy() {
        return this.created_by;
    }

    setUpdatedBy(updated_by) {
        if (updated_by && updated_by.length > 0) {
            this.updated_by = updated_by;
            return true;
        } else {
            return false;
        }
    }

    getUpdatedBy() {
        return this.updated_by;
    }

    setDeletedBy(deleted_by) {
        if (deleted_by && deleted_by.length > 0) {
            this.deleted_by = deleted_by;
            return true;
        } else {
            return false;
        }
    }

    getDeletedBy() {
        return this.deleted_by;
    }

    async select() {
        const result = await UsuarioModel.query().paginate(1, 50)
        return result.rows
    }

    async selectById(u) {
        const result = await UsuarioModel.query().where('id', u.id).paginate(1, 50)
        return result.rows
    }

    async selectByEmail(u){
        const result = await UsuarioModel.query().where('email', u.email).paginate(1,50)
        return result.rows
    }

    async insert(u) {
        let verify = await UsuarioModel.query().where('email', u.email).paginate(1, 50);
        if (verify.pages.total > 0) {
            return false;
        } else {
            return await UsuarioModel.create({
                nome: u.nome,
                cpf: u.cpf,
                email: u.email,
                senha: u.senha,
                tipo: u.tipo,
                profissional_id: u.profissional_id,
                created_by: u.created_by
            })
        }
    }

    async update(u) {
        let verify = await UsuarioModel.query().where('id', u.id).paginate(1, 50);
        if (verify.pages.total > 0) {
            return UsuarioModel.query().where('id', u.id).update({
                nome: u.nome,
                cpf: u.cpf,
                email: u.email,
                senha: await this.hash.make(u.senha),
                updated_by: u.updated_by
            })
        } else {
            return false;
        }
    }

    async delete(u) {
        let verify = await UsuarioModel.query().where('id', u.id).paginate(1, 50);
        if (verify.pages.total > 0) {
            return UsuarioModel.query().where('id', u.id).update({
                deleted_at: moment(),
                deleted_by: u.deleted_by
            })
        } else {
            return false;
        }
    }

}

module.exports = Usuario

