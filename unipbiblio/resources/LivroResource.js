const FileUtil = require("../util/FileUtil");

"use strict";

class LivroResource {

    /**
     * Construtor da classe
     * @param livroBusiness
     * @param livroModel
     */
    constructor(livroBusiness, livroModel) {
        this.livroBusiness = livroBusiness;
        this.livroModel = livroModel;
    }

    /**
     * Método responsável por pegar os campos que vieram na requisiçao e settalos no Dto.
     * @param request Requisição.
     * @param callback Retorno assíncrono.
     */
    getLivroEntity(request, callback) {
        if (request.params != null) {
            this.livroModel.setLvId(request.params.lvId);
        }
        if (request.body != null) {
            this.livroModel.setLvTitulo(request.body.lvTitulo);
            this.livroModel.setLvQuantidade(request.body.lvQuantidade);

            FileUtil.base64ToFile(request.body.lvFoto, "arquivos/", ".jpg", function (nomeImagem) {
                FileUtil.getFileSize(nomeImagem, function (imageSize) {
                    if (imageSize > 100) {
                        //Arquivo não permitido, maior do que 100 KB
                        FileUtil.normalizaImagem(nomeImagem, 300, 300, function (novaImagem) {
                            this.livroModel.setLvFoto(novaImagem);
                        });
                    } else {
                        this.livroModel.setLvFoto("Erro no tamanho da imagem");
                    }
                });
            });

            this.livroModel.setLvFoto(request.body.lvFoto);


        }

        callback(this.livroModel, this.livroBusiness);
    }

    /**
     * @description Lista todos os livroes
     * @param req requisição.     * @param res resposta.     * @param next transfere o controle.
     */
    findAll(req, res, next) {
        this.livroBusiness.findAll(
            function callbackLivro(rows) {
                res.json(rows);
                next();
            }, this.livroModel
        );
    }


    /**
     * @description Lista os livroes pelo seu id
     * @param req requisição.     * @param res resposta.     * @param next transfere o controle.
     */
    findId(req, res, next) {
        this.getLivroEntity(req, function (callback, callbackLivroBusiness) {
            callbackLivroBusiness.findId(callback,
                function callbackLivro(rows) {
                    res.json(rows);
                    next();
                });
        });
    }

    /**
     * @description Inserir um novo livro
     * @param req requisição.     * @param res resposta.     * @param next transfere o controle.
     */
    insert(req, res, next) {
        this.getLivroEntity(req, function (callback, callbackLivroBusiness) {
            if (callback.getlvFoto().contains("Erro")) {
                res.json("erro:" + callback.getlvFoto());
                next();
            } else {
                callbackLivroBusiness.insert(callback,
                    function callbackLivro(retornoLivro) {
                        res.json(retornoLivro);
                        next();
                    }
                );
            }
        });
    }

    /**
     * @description Altera os dados do livro
     * @param req requisição.     * @param res resposta.     * @param next transfere o controle.
     */
    update(req, res, next) {
        this.getLivroEntity(req, function (callback, callbackLivroBusiness) {
            if (callback.getlvFoto().contains("Erro")) {
                res.json("erro:" + callback.getlvFoto());
                next();
            } else {
                callbackLivroBusiness.update(callback,
                    function callbackLivro(retornoLivro) {
                        res.json(retornoLivro);
                        next();
                    });
            }
        });

    }

    /**
     * @description Deleta o livro informando seu id
     * @param req requisição.     * @param res resposta.     * @param next transfere o controle.
     */
    delete(req, res, next) {
        this.getLivroEntity(req, function (callback, callbackLivroBusiness) {
            callbackLivroBusiness.delete(callback,
                function callbackLivro(retornoLivro) {
                    res.status(200);
                    res.json(retornoLivro);
                    next();
                })
        });
    }


}

module.exports = LivroResource;