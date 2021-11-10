const FabricaRepositorioBDR = require('../Models/Repositorio/FabricaRepositorioBDR');

class ControladorMatricula {

    constructor() {
        this.fabricaBDR = new FabricaRepositorioBDR();
    }

    async inserirMatricula(
        curso_id,
        aluno_id
    ) {
        
        return new Promise(
            async (resolve, reject) => {

                try {

                    var matriculaBDR = this.fabricaBDR.criarRepositorioMatricula();

                    var cursoBDR = this.fabricaBDR.criarRepositorioCurso();

                    if (!await cursoBDR.hasCurso(curso_id)) return reject("O curso não existe!");

                    if (await matriculaBDR.hasMatricula(curso_id, aluno_id)) return reject("Aluno já está matriculado!");

                    await matriculaBDR.inserirMatricula(
                        curso_id,
                        aluno_id
                    );

                    resolve(true);

                } catch (e) {

                    reject(e);

                }


            }
        );

    }

    async getCursosMatriculados(
        aluno_id
    ) {

        return new Promise(
            async (resolve, reject) => {

                try {

                    var matriculaBDR = this.fabricaBDR.criarRepositorioMatricula();

                    // var cursoBDR = this.fabricaBDR.criarRepositorioCurso();

                    // if (!await cursoBDR.hasCurso(curso_id)) return reject("O curso não existe!");

                    // if (await matriculaBDR.hasMatricula(curso_id, aluno_id)) return reject("Aluno já está matriculado!");

                    const cursos = await matriculaBDR.getCursosMatriculados(
                        aluno_id
                    );

                    resolve(cursos);

                } catch (e) {

                    reject(e);

                }


            }
        );

    }

}

module.exports = ControladorMatricula;