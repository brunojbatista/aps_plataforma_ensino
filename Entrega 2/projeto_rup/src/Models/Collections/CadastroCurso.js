const Curso = require("./Entities/Curso");

class CadastroCurso {

    constructor(RepositorioCurso) {
        this.RepositorioCurso = RepositorioCurso;
    }

    async inserirCurso(
        nome,
        descricao,
        valor,
        professor_id
    ) {
        return new Curso(await this.RepositorioCurso.inserirCurso(
            nome,
            descricao,
            valor,
            professor_id
        ));
    }

    async getAllCursos() {
        return await this.RepositorioCurso.getAllCursos();
    }

    async getByProfessor(professor_id) {
        return await this.RepositorioCurso.getByProfessor(professor_id);
    }

    async hasCurso(curso_id) {
        return await this.RepositorioCurso.hasCurso(curso_id);
    }

    async getCurso(curso_id) {
        return new Curso(await this.RepositorioCurso.getCurso(curso_id));
    }

}

module.exports = CadastroCurso;