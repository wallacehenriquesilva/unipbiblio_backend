"use strict";

class LivroAutorResource {
    /**
     * Construtor cla classe
     * @param livroAutorBusiness Instancia Businesse do livroAutor.
     */
    constructor(livroAutorBusiness) {
        this.livroAutorBusiness = livroAutorBusiness;
    }

    /**
     * Método responsável por realizar o insert da tabela LivroAutro.
     * @param livroAutorModel Dto do livroAutor a ser inserido.
     * @param callback function de retorno assíncrono.
     */
    insert(livroAutorModel, callback) {
        this.livroAutorBusiness.insert(livroAutorModel,
            function callbackLivroAutor(retornoLivroAutor) {
                callback(retornoLivroAutor);
            }
        );
    }

    /**
     * Método responsável por procurar o livro na tabela através do ID.
     * @param livroAutorModel Dto do livroAutor a ser inserido.
     * @param callback function de retorno assíncrono.
     */
    find(livroAutorModel, callback) {
        this.livroAutorBusiness.find(livroAutorModel,
            function callbackLivroAutor(retornoLivroAutor) {
                callback(retornoLivroAutor);
            }
        );

    }


}

module.exports = LivroAutorResource;