// const GlobalUtils = require('../../Utils/Global');
const UsuarioModel = require('../../../database/models/Usuario');
const { Op } = require("sequelize");
const sequelize = require("../../../database/db");

class UsuarioBDR {

    constructor() {}

    async inserirUsuario(
        cpf,
        nome,
        login,
        senha,
        email,
        telefone
    ) {
        
        var novoUsuario = await UsuarioModel.create({
            cpf,
            nome,
            login,
            senha,
            email,
            telefone
        });
        
        return novoUsuario;

    }

    async getByID(usuario_id) {
        var usuario = await UsuarioModel.findByPk(usuario_id);
        // console.log("usuario", usuario)
        return usuario;
    }

    async getBySession(session_hash) {
        const [results] = await sequelize.query(`SELECT * FROM usuarios WHERE session_hash = '${session_hash}'`);
        if (results.length <= 0) throw "Sessão inexistente"; 
        return results[0];
    }

    async getByLogin(login) {
        const [results] = await sequelize.query(`SELECT * FROM usuarios WHERE login = '${login}'`);
        if (results.length <= 0) throw "Login/Senha incorreto(s)"; 
        return results[0];
    }

    async hasUsuarioByCPF(cpf) {
        var [results] = await sequelize.query(`SELECT id FROM usuarios WHERE cpf = '${cpf}'`);
        return results.length > 0;
    }

    async hasUsuarioByLogin(login) {
        var [results] = await sequelize.query(`SELECT id FROM usuarios WHERE login = '${login}'`);
        return results.length > 0;
    }

    async atualizarSessionHash(id, session_hash) {
        const usuario = await UsuarioModel.findByPk(id);
        usuario.session_hash = session_hash;
        return usuario.save();
    }

}

module.exports = UsuarioBDR;