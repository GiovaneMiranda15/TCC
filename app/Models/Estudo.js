'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Estudo extends Model {
    static get table(){
        return 'estudo'
    }
}

module.exports = Estudo
