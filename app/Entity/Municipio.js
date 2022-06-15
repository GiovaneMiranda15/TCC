"use strict";
const MunicipioModel = use('App/Models/Municipio')
const Database = use('Database')

const moment = require('moment');

class Municipio {
    id;
    descricao;
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

    setDescricao(descricao) {
        this.descricao = descricao;
    }

    getDescricao() {
        return this.descricao;
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
        const result = await MunicipioModel.query().paginate(1, 50)
        return result.rows
    }

    async insert() {
        return await MunicipioModel.create({ descricao: this.descricao, created_by: this.created_by })
    }

    async update() {
        return Database.table('municipio').where('id', this.id).update({ descricao: this.descricao, updated_by: this.updated_by }).returning('*');
    }

    async delete(){
        return Database.table('municipio').where('id', this.id).update({ deleted_at: moment().utc().local().format() , deleted_by: this.deleted_by }).returning('*');
    }

}

module.exports = Municipio

