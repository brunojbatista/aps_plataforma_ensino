// const GlobalUtils = require('../../Utils/Global');
const RepositorioSessaoInterface = require("../RepositorioSessaoInterface");
const SessaoModel = require('../../../../database/models/Sessao');
const sequelize = require("../../../../database/db");

/*
    Classe para fazer consulta no banco de dados em relação a classe
    de usuários
*/

class RepositorioSessaoBDR extends RepositorioSessaoInterface {

    constructor() { super(); }

    async getSession(session_hash) {
        const [results] = await sequelize.query(`SELECT * FROM sessaos WHERE session_hash = '${session_hash}'`);
        if (results.length <= 0) throw "Sessão inexistente"; 
        return results[0];

        // return {
        //     id: "adwd",
        //     session_hash: "bbbbbbbb",
        //     createdAt: "criou",
        //     updatedAt: "atualizou",
        //     usuario_id: "ccccc"
        // }
    }

    async inserirSessao(usuario_id, session_hash) {
        var sessao = await SessaoModel.create({
            usuario_id, 
            session_hash
        });
        return sessao.dataValues;
    }

    // async inserirUsuario(
    //     cpf,
    //     nome,
    //     login,
    //     senha,
    //     email,
    //     telefone
    // ) {
    //     var novoUsuario = await UsuarioModel.create({
    //         cpf,
    //         nome,
    //         login,
    //         senha,
    //         email,
    //         telefone
    //     });
    //     return novoUsuario;
    // }

    // async getByID(usuario_id) {
    //     var usuario = await UsuarioModel.findByPk(usuario_id);
    //     // console.log("usuario", usuario)
    //     return usuario;
    // }

    // async getSession(session_hash) {
    //     const [results] = await sequelize.query(`SELECT * FROM usuarios WHERE session_hash = '${session_hash}'`);
    //     if (results.length <= 0) throw "Sessão inexistente"; 
    //     return results[0];
    // }

    // async getByLogin(login) {
    //     const [results] = await sequelize.query(`SELECT * FROM usuarios WHERE login = '${login}'`);
    //     if (results.length <= 0) throw "Login/Senha incorreto(s)"; 
    //     return results[0];
    // }

    // async hasUsuarioByCPF(cpf) {
    //     var [results] = await sequelize.query(`SELECT id FROM usuarios WHERE cpf = '${cpf}'`);
    //     return results.length > 0;
    // }

    // async hasUsuarioByLogin(login) {
    //     var [results] = await sequelize.query(`SELECT id FROM usuarios WHERE login = '${login}'`);
    //     return results.length > 0;
    // }

    // async atualizarSessionHash(id, session_hash) {
    //     const usuario = await UsuarioModel.findByPk(id);
    //     usuario.session_hash = session_hash;
    //     return usuario.save();
    // }

}

module.exports = RepositorioSessaoBDR;