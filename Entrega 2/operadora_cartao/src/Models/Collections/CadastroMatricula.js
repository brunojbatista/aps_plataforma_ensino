const Matricula = require("./Entities/Matricula");

class CadastroMatricula {

    constructor(RepositorioMatriculaInterface) {
        // console.log(RepositorioMatriculaInterface);
        this.RepositorioMatriculaInterface = RepositorioMatriculaInterface;
    }

}

module.exports = CadastroMatricula;