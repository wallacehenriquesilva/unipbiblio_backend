"use strict";
const RESPONSE_ERROR = {resultado: null, erro: "Livro com  emprestimo em aberto"};

const LivroEmpresimo = require("./LivroEmprestimoResource");
const LivroEmpresimoModel = require("../model/LivroEmprestimoModel");
const LivroEmprestimoBusiness = require("../business/LivroEmprestimoBusiness");

class EmprestimoResource {

    constructor(emprestimoBusiness, emprestimoModel) {
        this.emprestimoBusiness = emprestimoBusiness;
        this.emprestimoModel = emprestimoModel;
    }

    getEmprestimoEntity(request, callback) {
        if (request.params != null) {
            this.emprestimoModel.setEmId(request.params.emId);
        }
        if (request.body != null) {
            this.emprestimoModel.setEmDataInicio(request.body.emDataInicio);
            this.emprestimoModel.setEmDataFim(request.body.emDataFim);
            this.emprestimoModel.setEmDataDevolucao(request.body.emDataDevolucao);
        }

        callback(this.emprestimoModel, this.emprestimoBusiness);
    }

    /**
     * @description Lista todos os emprestimos
     * @param req requisição.
     * @param res resposta.
     * @param next transfere o controle.
     */
    findAll(req, res, next) {
        this.emprestimoBusiness.findAll(
            function callbackEmprestimo(rows) {
                res.json(rows);
                next();
            }, this.emprestimoModel
        );
    }


    /**
     * @description Lista os emprestimos pelo seu id
     * @param req requisição.     * @param res resposta.     * @param next transfere o controle.
     */
    findId(req, res, next) {
        this.getEmprestimoEntity(req, function (callback, callbackEmprestimoBusiness) {
            callbackEmprestimoBusiness.findId(callback,
                function callbackEmprestimo(rows) {
                    res.json(rows);
                    next();
                });
        });
    }

    /**
     * @description Inserir um novo emprestimo
     * @param req requisição.     * @param res resposta.     * @param next transfere o controle.
     */
    insert(req, res, next) {
        this.getEmprestimoEntity(req, function (callback, callbackEmprestimoBusiness) {
            this.confereEmprestimo(callback, callbackEmprestimoBusiness, function (call) {
                if (call) {
                    callbackEmprestimoBusiness.insert(callback,
                        function callbackEmprestimo(retornoEmprestimo) {
                            res.json(retornoEmprestimo);
                            next();
                        }
                    );
                } else {
                    res.json(RESPONSE_ERROR);
                    next();
                }
            });


        });
    }

    /**
     * @description Altera os dados do emprestimo
     * @param req requisição.     * @param res resposta.     * @param next transfere o controle.
     */
    update(req, res, next) {
        this.getEmprestimoEntity(req, function (callback, callbackEmprestimoBusiness) {
            callbackEmprestimoBusiness.update(callback,
                function callbackEmprestimo(retornoEmprestimo) {
                    res.json(retornoEmprestimo);
                    next();
                })
        });

    }

    /**
     * @description Deleta o emprestimo informando seu id
     * @param req requisição.     * @param res resposta.     * @param next transfere o controle.
     */
    delete(req, res, next) {
        this.getEmprestimoEntity(req, function (callback, callbackEmprestimoBusiness) {
            this.confereEmprestimo(callback, callbackEmprestimoBusiness, function (call) {
                if (call) {
                    callbackEmprestimoBusiness.delete(callback,
                        function callbackEmprestimo(retornoEmprestimo) {
                            res.status(200);
                            res.json(retornoEmprestimo);
                            next();
                        });
                } else {
                    res.json(RESPONSE_ERROR);
                    next();
                }
            });
        });
    }

    /**
     * Método responsável por verificar se um livro esta com um impréstimo em aberto ou não.
     * @param lvId id do livro que se deseja verificar.
     */
    confereEmprestimo(lvId) {
        var livroEmprestimoModel = new LivroEmpresimoModel();
        livroEmprestimoModel.setLvId(lvId);

        new LivroEmpresimo(new LivroEmprestimoBusiness()).find(livroEmprestimoModel, function (callback) {
            if (callback.filter(x => x['Emprestimo.emDataDevolucao'] == "0000-00-00").length == 0) {
                return true;
            } else {
                return false;
            }
        });
    }
}

module.exports = EmprestimoResource;