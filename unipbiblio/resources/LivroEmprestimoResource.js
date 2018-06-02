"use strict";

class LivroEmprestimoResource {
    /**
     * Construtor cla classe
     * @param livroAutorBusiness Instancia Businesse do livroAutor.
     */
    constructor(livroEmprestimoBusiness) {
        this.livroEmprestimoBusiness = livroEmprestimoBusiness;
    }

    /**
     * Método responsável por realizar o insert da tabela LivroAutro.
     * @param livroAutorModel Dto do livroAutor a ser inserido.
     * @param callback function de retorno assíncrono.
     */
    insert(livroEmprestimoModel, callback) {
        this.livroEmprestimoBusiness.insert(livroEmprestimoModel,
            function (retornoLivroEmprestimo) {
                callback(retornoLivroEmprestimo);
            }
        );
    }

    /**
     * Método responsável por procurar o livro na tabela através do ID.
     * @param livroAutorModel Dto do livroAutor a ser inserido.
     * @param callback function de retorno assíncrono.
     */
    find(livroEmprestimoModel, callback) {
        console.log("ESTOU AQUI 2");
        this.livroEmprestimoBusiness.find(livroEmprestimoModel,
            function (retornoLivroEmprestimo) {
                callback(retornoLivroEmprestimo);
            }
        );
    }
}

module.exports = LivroEmprestimoResource;