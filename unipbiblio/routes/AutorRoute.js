const AutorModel = require("../model/AutorModel");
const AutorBusiness = require("../business/AutorBusiness");
const AutorResource = require('../resources/AutorResource');
const Server = require("../factory/ServerFactory");

class AutorRoute {
    constructor() {
        /**
         Resources
         @type {AutorResource|*|exports|module.exports}
         */
        this.autorResource = new AutorResource(new AutorBusiness(), new AutorModel());

        /**
         * GET - Resource Autor
         */
        Server.getServer().get('/api/v1/unip/biblioteca/autor', this.autorResource.findAll.bind(this.autorResource));
        /**
         * GET - Resource Autor
         */
        Server.getServer().get('/api/v1/unip/biblioteca/autor/:auId', this.autorResource.findId.bind(this.autorResource));
        /**
         * POST - Resource Autor
         */
        Server.getServer().post('/api/v1/unip/biblioteca/autor', this.autorResource.insert.bind(this.autorResource));
        /**
         * PUT - Resource Autor
         */
        Server.getServer().put('/api/v1/unip/biblioteca/autor/:auId', this.autorResource.update.bind(this.autorResource));
        /**
         * DELETE - Resource Autor
         */
        Server.getServer().del('/api/v1/unip/biblioteca/autor/:auId', this.autorResource.delete.bind(this.autorResource));
    }
}

module.exports = AutorRoute;