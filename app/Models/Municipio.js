'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Municipio extends Model {
    static get table(){
        return 'municipio'
    }
}

module.exports = Municipio
