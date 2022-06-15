'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Pais extends Model {
    static get table(){
        return 'pais'
    }
}

module.exports = Pais
