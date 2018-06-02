const UsuarioModel = require("../model/UsuarioModel");
const UsuarioBusiness = require("../business/UsuarioBusiness");
const UsuarioResource = require('../resources/UsuarioResource');
const Server = require("../factory/ServerFactory");

class UsuarioRoute {
    constructor() {
        /**
         Resources
         @type {UsuarioResource|*|exports|module.exports}
         */
        this.usuarioResource = new UsuarioResource(new UsuarioBusiness, new UsuarioModel());

        /**
         * GET - Resource Usuario
         */
        Server.getServer().get('/api/v1/unip/biblioteca/usuario', this.usuarioResource.findAll.bind(this.usuarioResource));
        /**
         * GET - Resource Usuario
         */
        Server.getServer().get('/api/v1/unip/biblioteca/usuario/:usId', this.usuarioResource.findId.bind(this.usuarioResource));
        /**
         * POST - Resource Usuario
         */
        Server.getServer().post('/api/v1/unip/biblioteca/usuario', this.usuarioResource.insert.bind(this.usuarioResource));
        /**
         * PUT - Resource Usuario
         */
        Server.getServer().put('/api/v1/unip/biblioteca/usuario/:usId', this.usuarioResource.update.bind(this.usuarioResource));
        /**
         * DELETE - Resource Usuario
         */
        Server.getServer().del('/api/v1/unip/biblioteca/usuario/:usId', this.usuarioResource.delete.bind(this.usuarioResource));
    }
}

module.exports = UsuarioRoute;