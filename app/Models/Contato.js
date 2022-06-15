'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Contato extends Model {
    static get table(){
        return 'contato'
    }
}

module.exports = Contato
