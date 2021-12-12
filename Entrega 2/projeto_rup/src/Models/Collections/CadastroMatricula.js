const Matricula = require("./Entities/Matricula");

class CadastroMatricula {

    constructor(RepositorioMatricula) {
        // console.log(RepositorioMatricula);
        this.RepositorioMatricula = RepositorioMatricula;
    }

    async hasMatricula(curso_id, aluno_id) {
        return await this.RepositorioMatricula.hasMatricula(curso_id, aluno_id);
        // return true;
    }

    async inserirMatricula(curso_id, aluno_id) {
        return new Matricula(await this.RepositorioMatricula.inserirMatricula(curso_id, aluno_id));
    }

}

module.exports = CadastroMatricula;