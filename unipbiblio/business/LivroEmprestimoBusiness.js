"use strict";
const GenericCrud = require("./GenericCrud");
const EmprestimoModel = require("../model/EmprestimoModel");

class LivroEmprestimoBusiness extends GenericCrud {


    /**
     * @description Inserir um novo usuario
     * @param livroEmprestimoModel
     * @param callbackLivroEmprestimo
     */
    insert(livroEmprestimoModel, callbackLivroEmprestimo) {
        super.insert(
            livroEmprestimoModel.LivroEmprestimo,
            callbackLivroEmprestimo
        );
    }


    find(livroEmprestimoModel, callbackLivroEmprestimo) {
        console.log("ESTOU AQUI 3");
        livroEmprestimoModel.LivroEmprestimo.findAll({
                raw: true,
                where: {lvId: livroEmprestimoModel.getLvId()},
                include: [{
                    model: new EmprestimoModel().Emprestimo,
                    required: true
                }]
            }
        ).then(response => {
            callbackLivroEmprestimo(response)
        });
    }
}

module.exports = LivroEmprestimoBusiness;