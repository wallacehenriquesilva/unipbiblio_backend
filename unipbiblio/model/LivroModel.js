const Connection = require("../factory/SequelizeFactory");
var Sequelize = require('sequelize');

var connection = new Connection();

class LivroModel {
    constructor() {
        this.Livro = connection.connect().define('Livro', {
                lvId: {
                    type: Sequelize.INTEGER,
                    primaryKey: true
                },
                lvTitulo: {
                    type: Sequelize.STRING(200)
                },
                lvQutantidade: {
                    type: Sequelize.INTEGER
                },
                lvFoto: {
                    type: Sequelize.STRING
                }
            }, {
                // Não adicionar atributos timestamps
                timestamps: false,

                // Desativa a modificação automatica dos nomes das tabelas pelo sequelize
                freezeTableName: true,

                // define the table's name
                tableName: 'Livro'
            }
        );

    }

    setLvId(lvId) {
        this.Livro.lvId = lvId;
    }

    getLvId() {
        return this.Livro.lvId;
    }

    setLvTitulo(lvTitulo) {
        this.Livro.lvTitulo = lvTitulo;
    }

    getlvTitulo() {
        return this.Livro.lvTitulo;
    }

    setLvQuantidade(lvQuantidade) {
        this.Livro.lvQuantidade = lvQuantidade;
    }

    getlvQuantidade() {
        return this.Livro.lvQuantidade;
    }

    setLvFoto(lvFoto) {
        this.Livro.lvFoto = lvFoto;
    }

    getlvFoto() {
        return this.Livro.lvFoto;
    }


}


module.exports = LivroModel;