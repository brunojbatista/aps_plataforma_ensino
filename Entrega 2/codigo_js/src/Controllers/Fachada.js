const ControladorUsuario    = require('../Models/ControladorUsuario');
const ControladorSessao     = require('../Models/ControladorSessao');
const ControladorCartao      = require('../Models/ControladorCartao');
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

                var controladorUsuario = new ControladorUsuario();

                var session_hash = await controladorSessao.registrarSessao(res);

                // resolve(true);

                try {

                    var session_hash = await controladorSessao.registrarSessao(res);

                    // resolve(true);
                    
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

    static criarCurso({
        nome,
        descricao,
        valor,
        req
    }) {

        return new Promise(
            async (resolve, reject) => {

                var controladorSessao = new ControladorSessao();

                var controladorCurso = new ControladorCurso();

                try {

                    controladorSessao.checarSessao(req);

                    const usuario = await controladorSessao.getSessaoUsuario(req);

                    console.log("criar curso usuario", usuario);
                    
                    const curso = await controladorCurso.cadastrarCurso(
                        nome,
                        descricao,
                        valor,
                        usuario.id
                    );

                    resolve(true);

                } catch (e) {
                    reject(e);
                }

            }
        );

        

        // var controladorCurso = new ControladorCurso();

        // checarSessao

        // return controladorCurso.cadastrarCurso(
        //     nome,
        //     descricao,
        //     valor,
        //     1
        // );

    }

    static async listarCursos () {

        return new Promise(
            async (resolve, reject) => {

                var controladorCurso = new ControladorCurso();

                const cursos = await controladorCurso.listarCursos();

                resolve(cursos);

                // var controladorSessao = new ControladorSessao();

                // var controladorCurso = new ControladorCurso();

                // try {

                //     controladorSessao.checarSessao(req);

                //     const usuario = await controladorSessao.getSessaoUsuario(req);

                //     console.log("criar curso usuario", usuario);
                    
                //     const curso = await controladorCurso.cadastrarCurso(
                //         nome,
                //         descricao,
                //         valor,
                //         usuario.id
                //     );

                //     resolve(true);

                // } catch (e) {
                //     reject(e);
                // }

            }
        );

    }

    static async cadastrarCartao({
        numero,
        bandeira,
        req
    }) {

        return new Promise(
            async (resolve, reject) => {

                try {

                    var controladorSessao = new ControladorSessao();

                    var controladorCartao = new ControladorCartao();

                    controladorSessao.checarSessao(req);

                    const usuario = await controladorSessao.getSessaoUsuario(req);

                    console.log("criar curso usuario", usuario);
                    
                    const curso = await controladorCartao.cadastrarCartao(
                        numero,
                        bandeira,
                        usuario.id
                    );

                    resolve(true);

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