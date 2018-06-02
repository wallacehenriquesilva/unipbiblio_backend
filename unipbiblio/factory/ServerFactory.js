var restify = require('restify');
var server = null;

class ServerFactory {

    configuraServer() {

    }

    static getServer() {
        if (server == null) {
            server = restify.createServer({
                name: 'unipbiblio',
                version: '1.0.0'
            });

            server.use(restify.plugins.acceptParser(server.acceptable));
            server.use(restify.plugins.queryParser());
            server.use(restify.plugins.bodyParser());
        }

        return server;
    }


}

module.exports = ServerFactory;
