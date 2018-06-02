const Connection = require("../factory/SequelizeFactory");
const EmprestimoModel = require("./EmprestimoModel");
var Sequelize = require('sequelize');

var connection = new Connection();

class LivroEmprestimoModel {
    constructor() {
        this.LivroEmprestimo = connection.connect().define('LivroEmprestimo', {
                lvId: {
                    type: Sequelize.INTEGER,
                    primaryKey: true
                },
                emId: {
                    type: Sequelize.INTEGER
                }
            }, {
                // Não adicionar atributos timestamps
                timestamps: false,

                // Desativa a modificação automatica dos nomes das tabelas pelo sequelize
                freezeTableName: true,

                // define the table's name
                tableName: 'LivroEmprestimo'
            }
        );

        this.LivroEmprestimo.belongsTo(new EmprestimoModel().Emprestimo, {foreignKey: 'emId'})

    }

    setLvId(lvId) {
        this.LivroEmprestimo.lvId = lvId;
    }

    getLvId() {
        return this.LivroEmprestimo.lvId;
    }

    setEmId(emId) {
        this.LivroEmprestimo.emId = emId;
    }

    getEmId() {
        return this.LivroEmprestimo.emId;
    }


}


module.exports = LivroEmprestimoModel;