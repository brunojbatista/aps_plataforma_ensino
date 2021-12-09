// const CadastroUsuario   = require('./CadastroUsuario');
const Usuario = require("./Entities/Usuario");

class CadastroUsuario {

    constructor(RepositorioUsuario) {
        // console.log(RepositorioUsuario);
        this.RepositorioUsuario = RepositorioUsuario;
    }

    async inserirUsuario(
        cpf,
        nome,
        login,
        senha,
        email,
        telefone
    ) {
        var data = await this.RepositorioUsuario.inserirUsuario(
            cpf,
            nome,
            login,
            senha,
            email,
            telefone
        );
        // console.log("CadastroUsuario - inserirUsuario");
        // console.log(data.dataValues);
        return new Usuario(data.dataValues);
    }

    async hasUsuarioByCPF(cpf) {
        return this.RepositorioUsuario.hasUsuarioByCPF(cpf);
    }

    async hasUsuarioByLogin(cpf) {
        return this.RepositorioUsuario.hasUsuarioByLogin(cpf);
    }

    async getByID(id) {
        return new Usuario(await this.RepositorioUsuario.getByID(id));
    }

    async getByLogin(login) {
        return new Usuario(await this.RepositorioUsuario.getByLogin(login));
    }

    async atualizarSessionHash(id, session_hash) {
        return new Usuario(await this.RepositorioUsuario.atualizarSessionHash(id, session_hash));
    }

    async getBySession(session_hash) {
        return new Usuario(await this.RepositorioUsuario.getBySession(session_hash));
    }

}

module.exports = CadastroUsuario;