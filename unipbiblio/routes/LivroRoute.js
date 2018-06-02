const LivroModel = require("../model/LivroModel");
const LivroBusiness = require("../business/LivroBusiness");
const LivroResource = require('../resources/LivroResource');
const Server = require("../factory/ServerFactory");

class LivroRoute {
    constructor() {
        /**
         Resources
         @type {LivroResource|*|exports|module.exports}
         */
        this.livroResource = new LivroResource(new LivroBusiness, new LivroModel());

        /**
         * GET - Resource Livro
         */
        Server.getServer().get('/api/v1/unip/biblioteca/livro', this.livroResource.findAll.bind(this.livroResource));
        /**
         * GET - Resource Livro
         */
        Server.getServer().get('/api/v1/unip/biblioteca/livro/:lvId', this.livroResource.findId.bind(this.livroResource));
        /**
         * POST - Resource Livro
         */
        Server.getServer().post('/api/v1/unip/biblioteca/livro', this.livroResource.insert.bind(this.livroResource));
        /**
         * PUT - Resource Livro
         */
        Server.getServer().put('/api/v1/unip/biblioteca/livro/:lvId', this.livroResource.update.bind(this.livroResource));
        /**
         * DELETE - Resource Livro
         */
        Server.getServer().del('/api/v1/unip/biblioteca/livro/:lvId', this.livroResource.delete.bind(this.livroResource));
    }
}

module.exports = LivroRoute;