'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Estado extends Model {
    static get table(){
        return 'estado'
    }
}

module.exports = Estado
