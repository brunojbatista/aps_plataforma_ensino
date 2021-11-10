// const GlobalUtils = require('../../Utils/Global');
const MatriculaModel = require('../../../database/models/Matricula');
const { Op } = require("sequelize");
const sequelize = require("../../../database/db");

class MatriculaBDR {

    constructor() {}

    async inserirMatricula(
        curso_id,
        aluno_id
    ) {
        
        return await MatriculaModel.create({
            curso_id,
            aluno_id
        });

    }

    async hasMatricula(
        curso_id,
        aluno_id
    ) {
        const [results] = await sequelize.query(`SELECT id FROM matriculas WHERE curso_id = '${curso_id}' and aluno_id = '${aluno_id}'`);
        return results.length > 0;
    }

    async getCursosMatriculados(aluno_id) {
        const [results] = await sequelize.query(`
            SELECT 
                m.id as matricula_id,
                m.createdAt as matricula_criacao,
                c.id as curso_id, 
                c.nome, 
                c.descricao, 
                c.valor, 
                c.professor_id,
                u.id as professor_id,
                u.nome as professor_nome,
                u.email as professor_email
            FROM matriculas m 
            INNER JOIN cursos c 
            ON c.id = m.curso_id 
            INNER JOIN usuarios u
            ON u.id = c.professor_id
            WHERE aluno_id = '${aluno_id}'`);
        return results;
    }

    // async getByID(usuario_id) {
    //     var usuario = await UsuarioModel.findByPk(usuario_id);
    //     // console.log("usuario", usuario)
    //     return usuario;
    // }

    // async getBySession(session_hash) {
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

module.exports = MatriculaBDR;