const FabricaRepositorioBDR = require('../Models/Repositorio/FabricaRepositorioBDR');


class ControladorCurso {

    constructor() {
        this.fabricaBDR = new FabricaRepositorioBDR();
    }

    async cadastrarCurso(
        nome,
        descricao,
        valor,
        professor_id
    ) {

        return new Promise(
            async (resolve, reject) => {

                var cursoBDR = this.fabricaBDR.criarRepositorioCurso();

                var curso = await cursoBDR.inserirCurso(
                    nome,
                    descricao,
                    valor,
                    professor_id
                );

                return resolve(true);


            }
        );

        
    }

    async listarCursos() {

        return new Promise(
            async (resolve, reject) => {

                var cursoBDR = this.fabricaBDR.criarRepositorioCurso();

                var cursos = await cursoBDR.getAllCursos();

                return resolve(cursos);


            }
        );

    }

}

module.exports = ControladorCurso;