"use strict";
//Inclui a dependência
var Sequelize = require('sequelize');

class SequelizeFactory {
    constructor() {
        //Configura o banco de dados
        this.sequelize = new Sequelize('unipbiblio', 'unipbiblio', 'Unip123#', {
            host: 'unipbiblio.mysql.dbaas.com.br',
            port: 3306,
            dialect: 'mysql'
        });
    }

    connect() {
        return this.sequelize;
    }

    close() {
        if (this.sequelize) {
            this.sequelize.close();
        }
    }
}

module.exports = SequelizeFactory;

// Emprestimo.belongsTo(User);
// User.hasMany(Emprestimo);