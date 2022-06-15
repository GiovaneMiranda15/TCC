'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Resultados extends Model {
    static get table(){
        return 'resultados'
    }
}

module.exports = Resultados
