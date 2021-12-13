// const CadastroUsuario   = require('./CadastroUsuario');
const Sessao = require("./Entities/Sessao");

class CadastroSessao {

    constructor(RepositorioSessao) {
        // console.log(RepositorioSessao);
        this.RepositorioSessao = RepositorioSessao;
    }

    async getSession(session_hash) {
        return new Sessao(await this.RepositorioSessao.getSession(session_hash));
    }

    async inserirSessao(usuario_id, session_hash) {
        return new Sessao(await this.RepositorioSessao.inserirSessao(usuario_id, session_hash));
    }

    async hasLogged(cookie) {
        if (!cookie.hasOwnProperty('logged')) return false;
        try {
            await this.getSession(cookie.logged);
            return true;
        } catch (e) {
            return false;
        } 
    }

    // async inserirUsuario(
    //     cpf,
    //     nome,
    //     login,
    //     senha,
    //     email,
    //     telefone
    // ) {
    //     var data = await this.RepositorioUsuario.inserirUsuario(
    //         cpf,
    //         nome,
    //         login,
    //         senha,
    //         email,
    //         telefone
    //     );
    //     // console.log("CadastroSessao - inserirUsuario");
    //     // console.log(data.dataValues);
    //     return new Usuario(data.dataValues);
    // }

    // async hasUsuarioByCPF(cpf) {
    //     return this.RepositorioUsuario.hasUsuarioByCPF(cpf);
    // }

    // async hasUsuarioByLogin(cpf) {
    //     return this.RepositorioUsuario.hasUsuarioByLogin(cpf);
    // }

    // async getByID(id) {
    //     return new Usuario(await this.RepositorioUsuario.getByID(id));
    // }

    // async getByLogin(login) {
    //     return new Usuario(await this.RepositorioUsuario.getByLogin(login));
    // }

    // async atualizarSessionHash(id, session_hash) {
    //     return new Usuario(await this.RepositorioUsuario.atualizarSessionHash(id, session_hash));
    // }

    // async getSession(session_hash) {
    //     return new Usuario(await this.RepositorioSessao.getSession(session_hash));
    // }

}

module.exports = CadastroSessao;