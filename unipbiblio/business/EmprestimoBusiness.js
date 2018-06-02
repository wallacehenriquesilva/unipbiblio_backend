"use strict";
const GenericCrud = require("./GenericCrud");

class EmprestimoBusiness extends GenericCrud {

    /**
     * @description Lista todos os emprestimoes
     * @param callbackEmprestimo
     */
    findAll(callbackEmprestimo, emprestimoModel) {
        super.findAll(
            emprestimoModel.Emprestimo,
            callbackEmprestimo
        );
    }

    /**
     * @description Lista os emprestimoes pelo seu id
     * @param emprestimoEntity
     * @param callbackEmprestimo
     */
    findId(emprestimoModel, callbackEmprestimo) {
        super.findId(
            emprestimoModel.Emprestimo,
            emprestimoModel.getEmId(),
            callbackEmprestimo
        );
    }

    /**
     * @description Inserir um novo emprestimo
     * @param emprestimoEntity
     * @param callbackEmprestimo
     */
    insert(emprestimoModel, callbackEmprestimo) {
        super.insert(
            emprestimoModel.Emprestimo,
            callbackEmprestimo
        );
    }

    /**
     * @description Altera os dados do emprestimo
     * @param emprestimoModel
     * @param callbackEmprestimo
     */
    update(emprestimoModel, callbackEmprestimo) {
        super.update(
            emprestimoModel.Emprestimo,
            {
                emId: emprestimoModel.getEmId()
            },
            callbackEmprestimo
        );
    }

    /**
     * @description Deleta o emprestimo informando seu id
     * @param emprestimoModel
     * @param callbackEmprestimo
     */
    delete(emprestimoModel, callbackEmprestimo) {
        super.delete(
            emprestimoModel.Emprestimo,
            {
                emId: emprestimoModel.getEmId()
            },
            callbackEmprestimo
        );
    }
}

module.exports = EmprestimoBusiness;