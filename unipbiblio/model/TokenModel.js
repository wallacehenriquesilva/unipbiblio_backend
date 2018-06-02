const Connection = require("../factory/SequelizeFactory");
var Sequelize = require('sequelize');

var connection = new Connection();

class TokenModel {
    constructor() {
        this.Token = connection.connect().define('Token', {
                tkId: {
                    type: Sequelize.INTEGER,
                    primaryKey: true
                },
                tkUs: {
                    type: Sequelize.STRING
                },
                tkBody: {
                    type: Sequelize.STRING
                },
                tkDate: {
                    type: Sequelize.DATE
                }
            }, {
                // Não adicionar atributos timestamps
                timestamps: false,

                // Desativa a modificação automatica dos nomes das tabelas pelo sequelize
                freezeTableName: true,

                // define the table's name
                tableName: 'Token'
            }
        );

    }


    setTkId(tkId) {
        this.Token.tkId = tkId;
    }

    getTkId() {
        return this.Token.tkId;
    }

    setTkUs(tkUs) {
        this.Token.tkUs = tkUs;
    }

    getTkUs() {
        return this.Token.tkUs;
    }


    setTkBody(tkBody) {
        this.Token.tkBody;
    }

    getTkBody() {
        return this.Token.tkBody;
    }

    setTkDate(tkDate) {
        this.Token.tkDate = tkDate;
    }

    getTkDate() {
        return this.Token.tkDate;
    }
}


module.exports = TokenModel;