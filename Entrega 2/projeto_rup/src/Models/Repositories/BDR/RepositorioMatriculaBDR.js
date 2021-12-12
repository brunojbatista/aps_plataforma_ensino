const RepositorioMatriculaInterface = require("../RepositorioMatriculaInterface");
const MatriculaModel = require('../../../../database/models/Matricula');
const sequelize = require("../../../../database/db");

class RepositorioMatriculaBDR extends RepositorioMatriculaInterface {

    constructor() { super(); }

    async hasMatricula(curso_id, aluno_id) {
        const [results] = await sequelize.query(`SELECT id FROM matriculas WHERE curso_id = '${curso_id}' and aluno_id = '${aluno_id}'`);
        return results.length > 0;
    }

    async inserirMatricula(curso_id, aluno_id) {
        return await MatriculaModel.create({
            curso_id,
            aluno_id
        });
    }

}

module.exports = RepositorioMatriculaBDR;