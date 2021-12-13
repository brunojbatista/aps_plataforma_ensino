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

    constructor() {
        var repositorio = new FabricaRepositorioBDR();
        this.controladorUsuario = new ControladorUsuario(
            repositorio
        );
        this.controladorCurso = new ControladorCurso(
            repositorio
        );
        this.controladorCartao = new ControladorCartao(
            repositorio
        );
        this.controladorMatricula = new ControladorMatricula(
            repositorio
        );
    }

    async cadastrarUsuario({
        cpf,
        nome,
        login,
        senha,
        email,
        telefone
    }) {

        return await this.controladorUsuario.cadastrarUsuario(
            cpf,
            nome,
            login,
            senha,
            email,
            telefone
        );

    }

    async autenticar({
        login,
        senha,
        res,
        req
    }) {

        return await this.controladorUsuario.autenticar(
            login,
            senha,
            res,
            req
        );

    }

    async criarCurso({
        nome,
        descricao,
        valor,
        req
    }) {
        
        return await this.controladorCurso.criarCurso(
            nome,
            descricao,
            valor,
            req
        );

    }

    async listarCursos () {

        return await this.controladorCurso.listarCursos();

    }

    async getCurso({
        id
    }) {
        
        return await this.controladorCurso.getCurso(
            id
        );

    }

    async cursosByProfessor({
        req
    }) {
        
        return await this.controladorCurso.cursosByProfessor(
            req
        );

    }

    async cadastrarCartao({
        numero,
        bandeira,
        req
    }) {

        return await this.controladorCartao.cadastrarCartao(
            numero,
            bandeira,
            req
        );

    }

    async listarCartoes({
        req
    }) {

        return await this.controladorCartao.listarCartoes(
            req
        );

    }

    async getCartao({
        cartao_id,
        req
    }) {

        return await this.controladorCartao.getCartao(
            cartao_id,
            req
        );

    }

    async matricularCurso({
        curso_id,
        cartao_id,
        req
    }) {

        return await this.controladorMatricula.matricularCurso(
            curso_id,
            cartao_id,
            req
        );

    }

}

module.exports = Fachada;