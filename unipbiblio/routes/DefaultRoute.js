const Server = require("../factory/ServerFactory");

class DefaultRoute {
    constructor() {
        Server.getServer().get('/', function (req, res, next) {
                res.json({mensagem: "Servidor ativado"});
                next();
            }
        );
    }
}

module.exports = DefaultRoute;