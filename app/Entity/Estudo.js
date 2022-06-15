"use strict";
const EstudoModel = use('App/Models/Estudo')
const Database = use('Database')

const moment = require('moment');

class Estudo {
    id;
    descricao;
    pessoa_id;
    material_id
    created_at;
    created_by;
    updated_at;
    updated_by;
    deleted_at;
    deleted_by;

    setId(id) {
        if(isFinite(id) && id>0){
            this.id = id;
            return true;
        }else{
            return false
        }
    }

    getId() {
        return this.id;
    }

    setDescricao(descricao) {
        if(descricao.length>0){
            this.descricao = descricao;
            return true;
        }else{
            return false;
        }
    }

    getDescricao() {
        return this.descricao;
    }

    setPessoaId(pessoa_id) {
        if(isFinite(pessoa_id) && pessoa_id>0){
            this.pessoa_id = pessoa_id;
            return true;
        }else{
            return false
        }
    }

    getPessoaId() {
        return this.pessoa_id;
    }

    setMaterialId(material_id) {
        if(isFinite(material_id) && material_id>0){
            this.material_id = material_id;
            return true;
        }else{
            return false
        }
    }

    getMaterialId() {
        return this.material_id;
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
        if(created_by && created_by.length>0){
            this.created_by = created_by;
            return true;
        }else{
            return false;
        }
    }

    getCreatedBy() {
        return this.created_by;
    }

    setUpdatedBy(updated_by) {
        if(updated_by && updated_by.length>0){
            this.updated_by = updated_by;
            return true;
        }else{
            return false;
        }
    }

    getUpdatedBy() {
        return this.updated_by;
    }

    setDeletedBy(deleted_by) {
        if(deleted_by && deleted_by.length>0){
            this.deleted_by = deleted_by;
            return true;
        }else{
            return false;
        }
    }
    
    async select() {
        const result = await EstudoModel.query().paginate(1, 50)
        return result.rows
    }

    async insert() {
        return await EstudoModel.create({ descricao: this.descricao, created_by: this.created_by })
    }

    async update() {
        return Database.table('estudo').where('id', this.id).update({ descricao: this.descricao, updated_by: this.updated_by }).returning('*');
    }

    async delete(){
        return Database.table('estudo').where('id', this.id).update({ deleted_at: moment().utc().local().format() , deleted_by: this.deleted_by }).returning('*');
    }

}

module.exports = Estudo

