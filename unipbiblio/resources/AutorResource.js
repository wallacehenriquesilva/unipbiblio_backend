"use strict";

/**
 * Classe Resource do autor, que fará as regras de negócio do Autor.
 */
class AutorResource {

    /**
     * Construtor da classe.
     * @param autorBusiness Instancia do Business do Autor.
     * @param autorModel Dto do autor.
     */
    constructor(autorBusiness, autorModel) {
        this.autorBusiness = autorBusiness;
        this.autorModel = autorModel;
    }

    /**
     * Método responsável por pegar os campos que vieram na requisiçao e settalos no Dto.
     * @param request Requisição.
     * @param callback Retorno assíncrono.
     */
    getAutorEntity(request, callback) {
        if (request.params != null) {
            this.autorModel.setAuId(request.params.auId);
        }
        if (request.body != null) {
            this.autorModel.setAuNome(request.body.auNome);
        }

        callback(this.autorModel, this.autorBusiness);
    }

    /**
     * @description Lista todos os autores
     * @param req requisição.
     * @param res resposta.
     * @param next transfere o controle.
     */
    findAll(req, res, next) {
        this.autorBusiness.findAll(
            function callbackAutor(rows) {
                res.json(rows);
                next();
            }, this.autorModel
        );
    }


    /**
     * @description Lista os autores pelo seu id
     * @param req requisição.
     * @param res resposta.
     * @param next transfere o controle.
     */
    findId(req, res, next) {
        this.getAutorEntity(req, function (callback, callbackAutorBusiness) {
            callbackAutorBusiness.findId(callback,
                function callbackAutor(rows) {
                    res.json(rows);
                    next();
                });
        });
    }

    /**
     * @description Inserir um novo autor
     * @param req requisição.
     * @param res resposta.
     * @param next transfere o controle.
     */
    insert(req, res, next) {
        this.getAutorEntity(req, function (callback, callbackAutorBusiness) {
            callbackAutorBusiness.insert(callback,
                function callbackAutor(retornoAutor) {
                    res.json(retornoAutor);
                    next();
                }
            );
        });
    }

    /**
     * @description Altera os dados do autor
     * @param req requisição.
     * @param res resposta.
     * @param next transfere o controle.
     */
    update(req, res, next) {
        this.getAutorEntity(req, function (callback, callbackAutorBusiness) {
            callbackAutorBusiness.update(callback,
                function callbackAutor(retornoAutor) {
                    res.json(retornoAutor);
                    next();
                })
        });

    }

    /**
     * @description Deleta o autor informando seu id
     * @param req requisição.
     * @param res resposta.
     * @param next transfere o controle.
     */
    delete(req, res, next) {
        this.getAutorEntity(req, function (callback, callbackAutorBusiness) {
            callbackAutorBusiness.delete(callback,
                function callbackAutor(retornoAutor) {
                    res.status(200);
                    res.json(retornoAutor);
                    next();
                })
        });
    }


}

module.exports = AutorResource;