const Connection = require("../factory/SequelizeFactory");
var Sequelize = require('sequelize');

var connection = new Connection();

class EmprestimoModel {
    constructor() {
        this.Emprestimo = connection.connect().define('Emprestimo', {
                emId: {
                    type: Sequelize.INTEGER,
                    primaryKey: true
                },
                usId: {
                    type: Sequelize.INTEGER,
                    foreignKey: true,
                    references: 'Usuario',
                    referenceskey:
                        'usId'
                },
                emDataInicio: {
                    type: Sequelize.DATE
                }
                ,
                emDataFim: {
                    type: Sequelize.DATE
                }
                ,
                emDataDevolucao: {
                    type: Sequelize.DATE
                }
            },
            {
                // Não adicionar atributos timestamps
                timestamps: false,

                // Desativa a modificação automatica dos nomes das tabelas pelo sequelize
                freezeTableName:
                    true,

                // define the table's name
                tableName:
                    'Emprestimo'
            });

    }

    setEmId(emId) {
        this.Emprestimo.emId = emId;
    }

    getEmId() {
        return this.Emprestimo.emId;
    }

    setUsId(usId) {
        this.Emprestimo.usId = usId;
    }

    getUsId() {
        return this.Emprestimo.usId;
    }

    setEmDataInicio(emDataInicio) {
        this.Emprestimo.emDataInicio = emDataInicio;
    }

    getEmDataInicio() {
        return this.Emprestimo.emDataInicio;
    }

    setEmDataFim(emDataFim) {
        this.Emprestimo.emDataFim = emDataFim;
    }

    getEmDataFim() {
        return this.Emprestimo.emDataFim;
    }

    setEmDataDevolucao(emDataDevolucao) {
        this.Emprestimo.emDataDevolucao = emDataDevolucao;
    }

    getEmDataDevolucao() {
        return this.Emprestimo.emDataDevolucao;
    }

}


module.exports = EmprestimoModel;