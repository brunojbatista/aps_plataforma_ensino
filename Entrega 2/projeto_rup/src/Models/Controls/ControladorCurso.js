const CadastroCurso   = require('../Collections/CadastroCurso');
const CadastroUsuario = require('../Collections/CadastroUsuario');
const GlobalUtils     = require('../../Utils/Global');


class ControladorCurso {

    constructor(fabricaRepositorio) {
        this.CadastroCurso = new CadastroCurso(
            fabricaRepositorio.criarRepositorioCurso()
        );
        this.CadastroUsuario = new CadastroUsuario(
            fabricaRepositorio.criarRepositorioUsuario()
        );
    }

    criarCurso(
        nome,
        descricao,
        valor,
        req
    ) {

        return new Promise(
            async (resolve, reject) => {

                try {
                    
                    const cookies = GlobalUtils.parseCookie(req);

                    // console.log("cookies", cookies);

                    if (!cookies.hasOwnProperty('logged')) reject("Usuário não logado!");

                    const session_hash = cookies.logged;

                    // console.log("session_hash", session_hash);

                    const usuario = await this.CadastroUsuario.getBySession(session_hash);

                    // console.log("usuario", usuario);

                    var curso = await this.CadastroCurso.inserirCurso(
                        nome,
                        descricao,
                        valor,
                        usuario.id
                    );
                    
                    resolve(true);

                } catch (e) { reject(e); }

            }
        );

    }
    
    listarCursos() {

        return new Promise(
            async (resolve, reject) => {

                try {
                    

                    var cursos = [];

                    cursos = await this.CadastroCurso.getAllCursos();

                    resolve(cursos);

                } catch (e) { reject(e); }

            }
        );

    }

    cursosByProfessor(
        req
    ) {

        return new Promise(
            async (resolve, reject) => {

                try {

                    const cookies = GlobalUtils.parseCookie(req);

                    // console.log("cookies", cookies);

                    if (!cookies.hasOwnProperty('logged')) reject("Usuário não logado!");

                    const session_hash = cookies.logged;

                    const usuario = await this.CadastroUsuario.getBySession(session_hash);
                    
                    var cursos = [];

                    cursos = await this.CadastroCurso.getByProfessor(usuario.id);

                    resolve(cursos);

                } catch (e) { reject(e); }

            }
        );

    }

    getCurso(
        id
    ) {

        return new Promise(
            async (resolve, reject) => {

                try {
                    
                    // var curso = {};

                    var curso = await this.CadastroCurso.getCurso(id);

                    resolve(curso);

                } catch (e) { reject(e); }

            }
        );

    }

}

module.exports = ControladorCurso;