const EmprestimoModel = require("../model/EmprestimoModel");
const EmprestimoBusiness = require("../business/EmprestimoBusiness");
const EmprestimoResource = require('../resources/EmprestimoResource');
const Server = require("../factory/ServerFactory");

class EmprestimoRoute {
    constructor() {
        /**
         Resources
         @type {EmprestimoResource|*|exports|module.exports}
         */
        this.emprestimoResource = new EmprestimoResource(new EmprestimoBusiness, new EmprestimoModel());

        /**
         * GET - Resource Emprestimo
         */
        Server.getServer().get('/api/v1/unip/biblioteca/emprestimo', this.emprestimoResource.findAll.bind(this.emprestimoResource));
        /**
         * GET - Resource Emprestimo
         */
        Server.getServer().get('/api/v1/unip/biblioteca/emprestimo/:emId', this.emprestimoResource.findId.bind(this.emprestimoResource));
        /**
         * POST - Resource Emprestimo
         */
        Server.getServer().post('/api/v1/unip/biblioteca/emprestimo', this.emprestimoResource.insert.bind(this.emprestimoResource));
        /**
         * PUT - Resource Emprestimo
         */
        Server.getServer().put('/api/v1/unip/biblioteca/emprestimo/:emId', this.emprestimoResource.update.bind(this.emprestimoResource));
        /**
         * DELETE - Resource Emprestimo
         */
        Server.getServer().del('/api/v1/unip/biblioteca/emprestimo/:emId', this.emprestimoResource.delete.bind(this.emprestimoResource));
    }
}

module.exports = EmprestimoRoute;