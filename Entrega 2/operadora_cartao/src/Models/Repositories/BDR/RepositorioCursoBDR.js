// const GlobalUtils = require('../../Utils/Global');
const RepositorioCursoInterface = require("../RepositorioCursoInterface");
const CursoModel = require('../../../../database/models/Curso');
const sequelize = require("../../../../database/db");

/*
    Classe para fazer consulta no banco de dados em relação a classe
    de cursos
*/

class RepositorioCursoBDR extends RepositorioCursoInterface {

    constructor() { super(); }

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

    async getByProfessor(professor_id) {
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
            WHERE c.professor_id = '${professor_id}'
        `);
        return results;
    }

    async getCurso(curso_id) {
        const [results] = await sequelize.query(`SELECT * FROM cursos WHERE id = '${curso_id}'`);
        if (results.length <= 0) throw "Curso inexistente";
        return results[0];
    }

}

module.exports = RepositorioCursoBDR;