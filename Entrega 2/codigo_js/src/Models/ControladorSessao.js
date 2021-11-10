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

        let code = md5(Date.now());
        // console.log('code', code)
        response.cookie('logged', code, {maxAge: 300000});

        this.session_hash = code;

        return this.session_hash;

    }

}

module.exports = ControladorSessao;