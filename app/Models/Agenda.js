'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Agenda extends Model {
    static get table(){
        return 'agenda'
    }
}

module.exports = Agenda
