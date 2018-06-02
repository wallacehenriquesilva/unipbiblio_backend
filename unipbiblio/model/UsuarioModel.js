const Connection = require("../factory/SequelizeFactory");
var Sequelize = require('sequelize');

var connection = new Connection();

class UsuarioModel {
    constructor() {
        this.Usuario = connection.connect().define('Usuario', {
                usId: {
                    type: Sequelize.INTEGER,
                    primaryKey: true
                },
                usNome: {
                    type: Sequelize.STRING(200)
                },
                usTelefone: {
                    type: Sequelize.STRING(20)
                },
                usEmail: {
                    type: Sequelize.STRING(50),
                    validate: {
                        isEmail: true
                    }
                },
                usSenha: {
                    type: Sequelize.STRING(50)
                }
            }, {
                // Não adicionar atributos timestamps
                timestamps: false,

                // Desativa a modificação automatica dos nomes das tabelas pelo sequelize
                freezeTableName: true,

                // define the table's name
                tableName: 'Usuario'
            }
        );

    }

    setUsId(usId) {
        this.Usuario.usId = usId;
    }

    getUsId() {
        return this.Usuario.usId;
    }

    setUsNome(usNome) {
        this.Usuario.usNome = usNome;
    }

    getUsNome() {
        return this.Usuario.usNome;
    }

    setUsTelefone(usTelefone) {
        this.Usuario.usTelefone = usTelefone;
    }

    getUsTelefone() {
        return this.Usuario.usTelefone;
    }

    setUsEmail(usEmail) {
        this.Usuario.usEmail = usEmail;
    }

    getUsEmail() {
        return this.Usuario.usEmail;
    }

    setUsSenha(usSenha) {
        this.Usuario.usSenha = usSenha;
    }

    getUsSenha() {
        return this.Usuario.usSenha;
    }


}


module.exports = UsuarioModel;