"use strict";
const GenericCrud = require("./GenericCrud");

class LivroBusiness extends GenericCrud {

    /**
     * @description Lista todos os livroes
     * @param callbackLivro
     */
    findAll(callbackLivro, livroModel) {
        super.findAll(
            livroModel.Livro,
            callbackLivro
        );
    }

    /**
     * @description Lista os livroes pelo seu id
     * @param livroEntity
     * @param callbackLivro
     */
    findId(livroModel, callbackLivro) {
        super.findId(
            livroModel.Livro,
            livroModel.getLvId(),
            callbackLivro
        );
    }

    /**
     * @description Inserir um novo livro
     * @param livroEntity
     * @param callbackLivro
     */
    insert(livroModel, callbackLivro) {
        super.insert(
            livroModel.Livro,
            callbackLivro
        );
    }

    /**
     * @description Altera os dados do livro
     * @param livroEntity
     * @param callbackLivro
     */
    update(livroModel, callbackLivro) {
        super.update(
            livroModel.Livro,
            {
                lvId: livroModel.getLvId()
            },
            callbackLivro
        );
    }

    /**
     * @description Deleta o livro informando seu id
     * @param livroEntity
     * @param callbackLivro
     */
    delete(livroModel, callbackLivro) {
        super.delete(
            livroModel.Livro,
            {
                lvId: livroModel.getLvId()
            },
            callbackLivro
        );
    }
}

module.exports = LivroBusiness;