const FabricaRepositorioBDR    = require("./Models/Repositories/FabricaRepositorioBDR");
const ControladorUsuario    = require('./Models/Controls/ControladorUsuario');

class Fachada {

    static async cadastrarUsuario({
        cpf,
        nome,
        login,
        senha,
        email,
        telefone
    }) {

        var controladorUsuario = new ControladorUsuario(
            new FabricaRepositorioBDR()
        );

        return await controladorUsuario.cadastrarUsuario(
            cpf,
            nome,
            login,
            senha,
            email,
            telefone
        );

    }

    static async autenticar({
        login,
        senha,
        res,
        req
    }) {

        var controladorUsuario = new ControladorUsuario(
            new FabricaRepositorioBDR()
        );

        return await controladorUsuario.autenticar(
            login,
            senha,
            res,
            req
        );
    }
}

module.exports = Fachada;