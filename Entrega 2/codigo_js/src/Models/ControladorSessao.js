const CadastroUsuario   = require('./CadastroUsuario');
const md5       = require('md5');

// const CadastroCartao    = require('./CadastroCartao');
// const CadastroMatricula = require('./CadastroMatricula');

const FabricaRepositorioBDR = require('../Models/Repositorio/FabricaRepositorioBDR');

class ControladorSessao {

    constructor(session_hash = null) {
        this.fabricaBDR = new FabricaRepositorioBDR();
        this.session_hash = session_hash;
    }

    registrarSessao(response) {

        var second = 3600;

        let code = md5(Date.now());
        // console.log('code', code)
        response.cookie('logged', code, {maxAge: second*1000});

        this.session_hash = code;

        return this.session_hash;

    }

    checarSessao(request) {

        if (!request.hasOwnProperty('cookies')) throw "Usuário não logado!";
      
        if (request.cookies.logged == undefined) throw "Usuário não logado!";
      
        return request.cookies.hasOwnProperty('logged');
      
    }

    async getSessaoUsuario(request) {

        return new Promise(
            async (resolve, reject) => {

                const session_hash = request.cookies.logged;

                var usuarioBDR = this.fabricaBDR.criarRepositorioUsuario();

                const usuario = await usuarioBDR.getBySession(session_hash);

                // if (usuario.senha !== senha) return reject("Login/Senha incorreto(s)");

                // usuarioBDR.atualizarSessionHash(usuario.id, session_hash);

                resolve(usuario);

            }
        );


    }
      

}

module.exports = ControladorSessao;