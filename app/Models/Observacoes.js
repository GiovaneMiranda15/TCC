'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Observacoes extends Model {
    static get table(){
        return 'observacoes'
    }
}

module.exports = Observacoes
