"use strict";
const GenericCrud = require("./GenericCrud");

class UsuarioBusiness extends GenericCrud {

    /**
     * @description Lista todos os usuarioes
     * @param callbackUsuario
     */
    findAll(callbackUsuario, usuarioModel) {
        super.findAll(
            usuarioModel.Usuario,
            callbackUsuario
        );
    }

    /**
     * @description Lista os usuarioes pelo seu id
     * @param usuarioModel
     * @param callbackUsuario
     */
    findId(usuarioModel, callbackUsuario) {
        super.findId(
            usuarioModel.Usuario,
            usuarioModel.getUsId(),
            callbackUsuario
        );
        usuarioModel.Usuario.findById(
            usuarioModel.getUsId()
        ).then(usuarioes => {
            callbackUsuario(usuarioes)
        });
    }

    /**
     * @description Inserir um novo usuario
     * @param usuarioModel
     * @param callbackUsuario
     */
    insert(usuarioModel, callbackUsuario) {
        super.insert(
            usuarioModel.Usuario,
            callbackUsuario
        );
    }

    /**
     * @description Altera os dados do usuario
     * @param usuarioModel
     * @param callbackUsuario
     */
    update(usuarioModel, callbackUsuario) {
        super.update(
            usuarioModel.Usuario,
            {
                usId: usuarioModel.getUsId()
            },
            callbackUsuario
        );
    }

    /**
     * @description Deleta o usuario informando seu id
     * @param usuarioModel
     * @param callbackUsuario
     */
    delete(usuarioModel, callbackUsuario) {
        super.delete(
            usuarioModel.Usuario,
            {
                usId: usuarioModel.getUsId()
            },
            callbackUsuario
        );
    }
}

module.exports = UsuarioBusiness;