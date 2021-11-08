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
        // console.log("novoUsuario", novoUsuario)
        return novoUsuario;

    }

    async getByID(usuario_id) {
        var usuario = await UsuarioModel.findByPk(usuario_id);
        console.log("usuario", usuario)
        return usuario;
    }

    async getByLogin(login) {
        var usuario = await UsuarioModel.findOne({
            'login': login
        });
        console.log("usuario", usuario)
        return usuario;
    }

    async hasUsuarioByCPF(cpf) {
        var [results] = await sequelize.query(`SELECT id FROM usuarios WHERE cpf = '${cpf}'`);
        // console.log('hasUsuarioByCPF', results);
        return results.length > 0;
    }

    async hasUsuarioByLogin(login) {
        var [results] = await sequelize.query(`SELECT id FROM usuarios WHERE login = '${login}'`);
        // console.log('hasUsuarioByLogin', results);
        return results.length > 0;
    }

    // async hasUsuario(campo) {
    //     var usuario = await UsuarioModel.findOne({
    //         where: {
    //             [Op.or]: [
    //                 {
    //                     cpf: {
    //                         [Op.eq]: campo
    //                     }
    //                 },
    //                 {
    //                     login: {
    //                         [Op.eq]: campo
    //                     }
    //                 }
    //             ]
    //         }
            
    //     });
    //     // console.log("usuario", usuario)
    //     return usuario !== null;
    // }

}

module.exports = UsuarioBDR;