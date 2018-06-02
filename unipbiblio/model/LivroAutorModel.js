const Connection = require("../factory/SequelizeFactory");
var Sequelize = require('sequelize');

var connection = new Connection();

class LivroAutorModel {
    constructor() {
        this.LivroAutor = connection.connect().define('LivroAutor', {
                lvId: {
                    type: Sequelize.INTEGER,
                    primaryKey: true
                },
                auId: {
                    type: Sequelize.INTEGER
                }
            }, {
                // Não adicionar atributos timestamps
                timestamps: false,

                // Desativa a modificação automatica dos nomes das tabelas pelo sequelize
                freezeTableName: true,

                // define the table's name
                tableName: 'LivroAutor'
            }
        );

    }

    setLvId(lvId) {
        this.LivroAutor.lvId = lvId;
    }

    getLvId() {
        return this.LivroAutor.lvId;
    }

    setEmId(auId) {
        this.LivroAutor.auId = auId;
    }

    getEmId() {
        return this.LivroAutor.auId;
    }


}


module.exports = LivroAutorModel;