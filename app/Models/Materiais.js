'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Materias extends Model {
    static get table(){
        return 'materias'
    }
}

module.exports = Materias
