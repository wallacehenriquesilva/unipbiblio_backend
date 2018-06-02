const Connection = require("../factory/SequelizeFactory");
var Sequelize = require('sequelize');

var connection = new Connection();

class AutorModel {
    constructor() {
        this.Autor = connection.connect().define('Autor', {
                auId: {
                    type: Sequelize.INTEGER,
                    primaryKey: true
                },
                auNome: {
                    type: Sequelize.STRING
                }
            }, {
                // Não adicionar atributos timestamps
                timestamps: false,

                // Desativa a modificação automatica dos nomes das tabelas pelo sequelize
                freezeTableName: true,

                // define the table's name
                tableName: 'Autor'
            }
        );

    }

    setAuId(auId) {
        this.Autor.auId = auId;
    }

    getAuId() {
        return this.Autor.auId;
    }

    setAuNome(auNome) {
        this.Autor.auNome = auNome;
    }

    getAuNome() {
        return this.Autor.auNome;
    }


}


module.exports = AutorModel;