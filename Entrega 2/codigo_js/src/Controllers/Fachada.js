const ControladorUsuario    = require('../Models/ControladorUsuario');
const ControladorSessao     = require('../Models/ControladorSessao');
class Fachada {

    static cadastrarUsuario({
        cpf,
        nome,
        login,
        senha,
        email,
        telefone
    }) {

        var controladorUsuario = new ControladorUsuario();

        return controladorUsuario.cadastrarUsuario(
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
        res
    }) {

        return new Promise(
            async (resolve, reject) => {

                var controladorSessao = new ControladorSessao();

                var session_hash = await controladorSessao.registrarSessao(res);

                var controladorUsuario = new ControladorUsuario();

                try {
                    
                    const usuario = await controladorUsuario.autenticar(
                        login,
                        senha,
                        session_hash
                    );

                    resolve(usuario);

                } catch (e) {
                    reject(e);
                }

            }
        );

    }

    // static fazerLogin(
    //     login,
    //     senha
    // ) {

    // }

    // static checarAutenticacao(
    //     usuario_id
    // ) {

    // }

    // static comprarCurso(
    //     curso_id,
    //     usuario_id
    // ) {

    // }

    // static cadastrarCurso(
    //     usuario_id,
    //     nome,
    //     descricao,
    //     preco
    // ) {

    // }

}

module.exports = Fachada;