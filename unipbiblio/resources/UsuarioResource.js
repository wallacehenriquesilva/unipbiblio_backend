"use strict";

class UsuarioResource {


    /**
     * Construtor da classe
     * @param usuarioBusiness
     * @param usuarioModel
     */
    constructor(usuarioBusiness, usuarioModel) {
        this.usuarioBusiness = usuarioBusiness;
        this.usuarioModel = usuarioModel;
    }


    /**
     * Método responsável por pegar os campos que vieram na requisiçao e settalos no Dto.
     * @param request Requisição.
     * @param callback Retorno assíncrono.
     */
    getUsuarioEntity(request, callback) {
        if (request.params != null) {
            this.usuarioModel.setUsId(request.params.usId);
        }
        if (request.body != null) {
            this.usuarioModel.setUsNome(request.body.usNome);
            this.usuarioModel.setUsTelefone(request.body.usTelefone);
            this.usuarioModel.setUsEmail(request.body.usEmail);
            this.usuarioModel.setUsSenha(request.body.usSenha);
        }

        callback(this.usuarioModel, this.usuarioBusiness);
    }

    /**
     * @description Lista todos os usuarioes
     * @param req requisição.     * @param res resposta.     * @param next transfere o controle.
     */
    findAll(req, res, next) {
        this.usuarioBusiness.findAll(
            function callbackUsuario(rows) {
                res.json(rows);
                next();
            }, this.usuarioModel
        );
    }


    /**
     * @description Lista os usuarioes pelo seu id
     * @param req requisição.     * @param res resposta.     * @param next transfere o controle.
     */
    findId(req, res, next) {
        this.getUsuarioEntity(req, function (callback, callbackUsuarioBusiness) {
            callbackUsuarioBusiness.findId(callback,
                function callbackUsuario(rows) {
                    res.json(rows);
                    next();
                });
        });
    }

    /**
     * @description Inserir um novo usuario
     * @param req requisição.     * @param res resposta.     * @param next transfere o controle.
     */
    insert(req, res, next) {
        this.getUsuarioEntity(req, function (callback, callbackUsuarioBusiness) {
            callbackUsuarioBusiness.insert(callback,
                function callbackUsuario(retornoUsuario) {
                    res.json(retornoUsuario);
                    next();
                }
            );
        });
    }

    /**
     * @description Altera os dados do usuario
     * @param req requisição.     * @param res resposta.     * @param next transfere o controle.
     */
    update(req, res, next) {
        this.getUsuarioEntity(req, function (callback, callbackUsuarioBusiness) {
            callbackUsuarioBusiness.update(callback,
                function callbackUsuario(retornoUsuario) {
                    res.json(retornoUsuario);
                    next();
                })
        });

    }

    /**
     * @description Deleta o usuario informando seu id
     * @param req requisição.     * @param res resposta.     * @param next transfere o controle.
     */
    delete(req, res, next) {
        this.getUsuarioEntity(req, function (callback, callbackUsuarioBusiness) {
            callbackUsuarioBusiness.delete(callback,
                function callbackUsuario(retornoUsuario) {
                    res.status(200);
                    res.json(retornoUsuario);
                    next();
                })
        });
    }


}

module.exports = UsuarioResource;