const AutorRoute = require("./routes/AutorRoute");
const EmprestimoRoute = require("./routes/EmprestimoRoute");
const LivroRoute = require("./routes/LivroRoute");
const UsuarioRoute = require("./routes/UsuarioRoute");
const DefaultRoute = require("./routes/DefaultRoute");
const ServerFactory = require("./factory/ServerFactory");

const Security = require("./middleware/Security");

/**
 * Classe responsável por iniciar o servidor e tratar todo o fluxo em geral.
 */
class Server {
    /**
     * Construtor da classe, inicia o server, define o middleare de segurança e as rotas.
     */
    constructor() {

        //Aciona o sub middleware de segurança
        ServerFactory.getServer().use(Security.authorization());

        new DefaultRoute();
        new AutorRoute();
        new EmprestimoRoute();
        new LivroRoute();
        new UsuarioRoute();
    }

    /**
     * Método que iniciar o servidor na porta 3000.
     */
    init() {
        const PORT = 3000;
        ServerFactory.getServer().listen(PORT, function () {
            console.log('%s ativado no endereco http://localhost:%i', ServerFactory.getServer().name, PORT);
        });

    }


}

/**
 * Realiza o start
 */
new Server().init();


