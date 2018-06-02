"use strict";
const GenericCrud = require("./GenericCrud");
const LivroModel = require("../model/LivroModel");

class LivroAutorBusiness extends GenericCrud {

    /**
     * @description Inserir um novo usuario
     * @param livroAutorModel
     * @param callbackLivroAutor
     */
    insert(livroAutorModel, callbackLivroAutor) {
        super.insert(
            livroAutorModel.Usuario,
            callbackLivroAutor
        );
    }

    find(livroAutorModel, callbackLivroAutor) {
        livroAutorModel.LivroAutor.findAll({
                raw: true,
                where: {lvId: livroAutorModel.getLvId()},
                include: [{
                    model: LivroModel,
                    required: true
                }]
            }
        ).then(response => {
            callbackLivroAutor(response)
        });
    }

}

module.exports = LivroAutorBusiness;