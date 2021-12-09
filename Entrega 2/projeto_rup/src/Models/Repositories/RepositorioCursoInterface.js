// const GlobalUtils = require('../../Utils/Global');

class RepositorioCursoInterface {

    constructor() {}

    inserirCurso(
        nome,
        descricao,
        valor,
        professor_id
    ) {}

    getAllCursos() {}

    hasCurso(curso_id) {}

    getByProfessor(professor_id) {}

    getCurso(curso_id) {}

}

module.exports = RepositorioCursoInterface;