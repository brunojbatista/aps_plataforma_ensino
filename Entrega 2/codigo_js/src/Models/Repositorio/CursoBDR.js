// const GlobalUtils = require('../../Utils/Global');
const CursoModel = require('../../../database/models/Curso');
const { Op } = require("sequelize");
const sequelize = require("../../../database/db");

class CursoBDR {

    constructor() {}

    async inserirCurso(
        nome,
        descricao,
        valor,
        professor_id
    ) {
        
        return await CursoModel.create({
            nome,
            descricao,
            valor,
            professor_id
        });

    }

    async getAllCursos() {
        const [results] = await sequelize.query(`
            SELECT 
                c.id as curso_id, 
                c.nome as curso_nome, 
                c.descricao as curso_descricao, 
                c.valor as curso_valor, 
                c.createdAt as curso_criacao, 
                u.id as professor_id,
                u.nome as professor_nome,
                u.email as professor_email
            FROM cursos c
            INNER JOIN usuarios u
            ON u.id = c.professor_id 
            WHERE 1
        `);
        return results;
    }

    async hasCurso(curso_id) {
        const [results] = await sequelize.query(`SELECT id FROM cursos WHERE id = '${curso_id}'`);
        return results.length > 0;
    }

    // async inserirCurso(
    //     cpf,
    //     nome,
    //     login,
    //     senha,
    //     email,
    //     telefone
    // ) {
        
    //     var novoUsuario = await CursoModel.create({
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

module.exports = CursoBDR;