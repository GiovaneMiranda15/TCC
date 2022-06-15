'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Desafios extends Model {
    static get table(){
        return 'desafios'
    }
}

module.exports = Desafios
