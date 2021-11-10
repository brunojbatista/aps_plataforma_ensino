const ControladorUsuario    = require('../Models/ControladorUsuario');
const ControladorSessao     = require('../Models/ControladorSessao');
const ControladorCurso      = require('../Models/ControladorCurso');
const ControladorCartao     = require('../Models/ControladorCartao');
const ControladorMatricula  = require('../Models/ControladorMatricula');
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









    // ------------------------------------------------------------------------------------------------------------------------
    // ------------------------------------------------------------------------------------------------------------------------
    // ------------------------------------------------------------------------------------------------------------------------

    static async testarMatricula({
        curso_id,
        req
    }) {

        return new Promise(
            async (resolve, reject) => {

                try {

                    var controladorSessao = new ControladorSessao();

                    var controladorMatricula = new ControladorMatricula();

                    controladorSessao.checarSessao(req);

                    const usuario = await controladorSessao.getSessaoUsuario(req);

                    const usuario_id = usuario.id;

                    console.log("criar curso usuario", usuario);
                    
                    await controladorMatricula.inserirMatricula(
                        curso_id,
                        usuario.id
                    );

                    resolve(true);

                } catch (e) {
                    reject(e);
                }

            }
        );

    }

    static async testarCursosMatriculados({
        req
    }) {

        return new Promise(
            async (resolve, reject) => {

                try {

                    var controladorSessao = new ControladorSessao();

                    var controladorMatricula = new ControladorMatricula();

                    controladorSessao.checarSessao(req);

                    const usuario = await controladorSessao.getSessaoUsuario(req);

                    const usuario_id = usuario.id;

                    console.log("criar curso usuario", usuario);
                    
                    const cursos = await controladorMatricula.getCursosMatriculados(
                        usuario.id
                    );

                    resolve(cursos);

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