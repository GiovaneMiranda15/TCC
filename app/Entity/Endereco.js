"use strict";
const EnderecoModel = use('App/Models/Endereco')
const Database = use('Database')

const moment = require('moment');

class Endereco {
    id;
    rua;
    cep;
    numero;
    municipio;
    estado;
    bairro;
    pessoa_id;
    tipo_pessoa;
    created_at;
    created_by;
    updated_at;
    updated_by;
    deleted_at;
    deleted_by;

    setId(id) {
        this.id = id;
    }

    getId() {
        return this.id;
    }

    setRua(rua) {
        this.rua = rua;
    }

    getRua() {
        return this.rua;
    }

    setCep(cep) {
        this.cep = cep;
    }

    getCep() {
        return this.cep;
    }

    setNumero(numero) {
        this.numero = numero;
    }

    getNumero() {
        return this.numero;
    }

    setMunicipio(municipio) {
        this.municipio = municipio;
    }

    getMunicipio() {
        return this.municipio;
    }
    
    setEstado(estado) {
        this.estado = estado;
    }

    getEstado() {
        return this.estado;
    }
    
    setBairro(bairro) {
        this.bairro = bairro;
    }

    getBairro() {
        return this.bairro;
    }
 
    setPessoaId(pessoa_id) {
        this.pessoa_id = pessoa_id;
    }

    getPessoaId() {
        return this.pessoa_id;
    }

    setTipoPessoa(tipo_pessoa) {
        this.tipo_pessoa = tipo_pessoa;
    }

    getTipoPessoa() {
        return this.tipo_pessoa;
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
        this.created_by = created_by;
    }

    getCreatedBy() {
        return this.created_by;
    }

    setUpdatedBy(updated_by) {
        this.updated_by = updated_by;
    }

    getUpdatedBy() {
        return this.updated_by;
    }

    setDeletedBy(deleted_by) {
        this.deleted_by = deleted_by;
    }

    getDeletedBy() {
        return this.deleted_by;
    }

    async select() {
        const result = await EnderecoModel.query().paginate(1, 50)
        return result.rows
    }

    async insert() {
        return await EnderecoModel.create({ descricao: this.descricao, created_by: this.created_by })
    }

    async update() {
        return Database.table('endereco').where('id', this.id).update({ descricao: this.descricao, updated_by: this.updated_by }).returning('*');
    }

    async delete(){
        return Database.table('endereco').where('id', this.id).update({ deleted_at: moment().utc().local().format() , deleted_by: this.deleted_by }).returning('*');
    }

}

module.exports = Endereco

