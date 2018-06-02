"use strict";

class TokenResource {

    /**
     * Construtor da classe
     * @param tokenBusiness
     * @param tokenModel
     */
    constructor(tokenBusiness, tokenModel) {
        this.tokenBusiness = tokenBusiness;
        this.tokenModel = tokenModel;
    }


    /**
     * Método responsável por pegar os campos que vieram na requisiçao e settalos no Dto.
     * @param request Requisição.
     * @param callback Retorno assíncrono.
     */
    getTokenEntity(request, callback) {
        var headerAuthorization = request.headers["authorization"].toString().split(".");
        this.tokenModel.setTkUs(headerAuthorization[0]);
        this.tokenModel.setTkBody(headerAuthorization[1]);
        this.tokenModel.setTkDate(new Date());

        callback(this.tokenModel, this.tokenBusiness);
    }

    /**
     * @description Inserir um novo token
     * @param req requisição.     * @param res resposta.     * @param next transfere o controle.
     */
    insert(req, res, next) {
        this.getTokenEntity(req, function (callback, callbackTokenBusiness) {
            callbackTokenBusiness.insert(callback,
                function callbackToken(retornoToken) {
                    res.json(retornoToken);
                    next();
                }
            );
        });
    }


    /**
     * @description Deleta o token informando seu id
     * @param req requisição.     * @param res resposta.     * @param next transfere o controle.
     */
    delete(req, res, next) {
        this.getTokenEntity(req, function (callback, callbackTokenBusiness) {
            callbackTokenBusiness.delete(callback,
                function callbackToken(retornoToken) {
                    res.status(200);
                    res.json(retornoToken);
                    next();
                })
        });
    }

    findToken(req, call) {
        this.getTokenEntity(req, function (callback, callbackTokenBusiness) {
            callbackTokenBusiness.findUs(callback,
                function callbackToken(rows) {
                    call(rows);
                });
        });
    }
}

module.exports = TokenResource;