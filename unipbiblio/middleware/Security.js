"use strict";
const TokenResource = require("../resources/TokenResource");
const TokenBusiness = require("../business/TokenBusiness");
const TokenModel = require("../model/TokenModel");

/**
 * Classe Security
 * @author Robson Fernandes
 * @version 1.0
 */
class Security {

    /**
     * Valida Autorização customizada
     * @returns {cross}
     */
    constructor() {
        this.tokenResource = new TokenResource(new TokenBusiness(), new TokenModel());
    }


    static validaData(data, callback) {
        var d = new Date();
        var d1 = new Date(data);

        var timeDiff = Math.abs(d1.getTime() - d.getTime());
        var diffSeconds = Math.ceil(timeDiff / (1000));

        console.log(diffSeconds)

        if (diffSeconds > 604800) {
            callback(false);
        } else {
            callback(true);
        }
    }

    authorization() {
        var auth = function (req, res, next) {

            var retorno = {};

            try {
                var tokenResource = new TokenResource(new TokenBusiness(), new TokenModel());

                var headerAuthorization = req.headers["authorization"].toString().split(".")
                var user = headerAuthorization[0];
                var token = headerAuthorization[1];

                tokenResource.findToken(req, function (call) {
                    if (token == call[0].tkBody) {
                        console.log("OK");
                        Security.validaData(call[0].tkDate, function (callback) {
                            if (callback) {
                                return next();
                            } else {
                                retorno = {resultado: null, erro: "Acesso não autorizado, token expirado."};
                                res.json(retorno);
                                return next();
                            }
                        });
                    } else {
                        retorno = {resultado: null, erro: "Acesso não autorizado"};
                        res.json(retorno);
                        return next();
                    }
                });
            }
            catch (e) {
                retorno = {resultado: null, erro: "Acesso não autorizado"};
                res.json(retorno)
            }

        }

        return auth;
    }

}

module.exports = new Security();