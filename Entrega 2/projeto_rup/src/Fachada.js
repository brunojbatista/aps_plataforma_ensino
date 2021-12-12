const FabricaRepositorioBDR    = require("./Models/Repositories/FabricaRepositorioBDR");
const ControladorUsuario    = require('./Models/Controls/ControladorUsuario');
const ControladorCurso      = require('./Models/Controls/ControladorCurso');
const ControladorCartao     = require('./Models/Controls/ControladorCartao');
const ControladorMatricula     = require('./Models/Controls/ControladorMatricula');
// const ControladorSessao     = require('../Models/ControladorSessao');
// const ControladorCurso      = require('../Models/ControladorCurso');
// const ControladorCartao     = require('../Models/ControladorCartao');
// const ControladorMatricula  = require('../Models/ControladorMatricula');



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

    static async criarCurso({
        nome,
        descricao,
        valor,
        req
    }) {

        var controladorCurso = new ControladorCurso(
            new FabricaRepositorioBDR()
        );
        
        return await controladorCurso.criarCurso(
            nome,
            descricao,
            valor,
            req
        );

    }

    static async listarCursos () {

        var controladorCurso = new ControladorCurso(
            new FabricaRepositorioBDR()
        );

        return await controladorCurso.listarCursos();

    }

    static async getCurso({
        id
    }) {

        var controladorCurso = new ControladorCurso(
            new FabricaRepositorioBDR()
        );
        
        return await controladorCurso.getCurso(
            id
        );

    }

    static async cursosByProfessor({
        req
    }) {

        var controladorCurso = new ControladorCurso(
            new FabricaRepositorioBDR()
        );
        
        return await controladorCurso.cursosByProfessor(
            req
        );

    }

    static async cadastrarCartao({
        numero,
        bandeira,
        req
    }) {

        var controladorCartao = new ControladorCartao(
            new FabricaRepositorioBDR()
        );

        return await controladorCartao.cadastrarCartao(
            numero,
            bandeira,
            req
        );

    }

    static async listarCartoes({
        req
    }) {

        var controladorCartao = new ControladorCartao(
            new FabricaRepositorioBDR()
        );

        return await controladorCartao.listarCartoes(
            req
        );

    }

    static async getCartao({
        cartao_id,
        req
    }) {

        var controladorCartao = new ControladorCartao(
            new FabricaRepositorioBDR()
        );

        return await controladorCartao.getCartao(
            cartao_id,
            req
        );

    }

    static async matricularCurso({
        curso_id,
        cartao_id,
        req
    }) {

        var controladorMatricula = new ControladorMatricula(
            new FabricaRepositorioBDR()
        );

        return await controladorMatricula.matricularCurso(
            curso_id,
            cartao_id,
            req
        );

    }





    // ------------------------------------------------------------------------------------------------------------------------
    // ------------------------------------------------------------------------------------------------------------------------
    // ------------------------------------------------------------------------------------------------------------------------

    static async testarMatricula({
        curso_id,
        req
    }) {

        // return new Promise(
        //     async (resolve, reject) => {

        //         try {

        //             var controladorSessao = new ControladorSessao();

        //             var controladorMatricula = new ControladorMatricula();

        //             controladorSessao.checarSessao(req);

        //             const usuario = await controladorSessao.getSessaoUsuario(req);

        //             const usuario_id = usuario.id;

        //             console.log("criar curso usuario", usuario);
                    
        //             await controladorMatricula.inserirMatricula(
        //                 curso_id,
        //                 usuario.id
        //             );

        //             resolve(true);

        //         } catch (e) {
        //             reject(e);
        //         }

        //     }
        // );

    }

    static async testarCursosMatriculados({
        req
    }) {

        // return new Promise(
        //     async (resolve, reject) => {

        //         try {

        //             var controladorSessao = new ControladorSessao();

        //             var controladorMatricula = new ControladorMatricula();

        //             controladorSessao.checarSessao(req);

        //             const usuario = await controladorSessao.getSessaoUsuario(req);

        //             const usuario_id = usuario.id;

        //             console.log("criar curso usuario", usuario);
                    
        //             const cursos = await controladorMatricula.getCursosMatriculados(
        //                 usuario.id
        //             );

        //             resolve(cursos);

        //         } catch (e) {
        //             reject(e);
        //         }

        //     }
        // );

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