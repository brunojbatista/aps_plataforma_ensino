// const GlobalUtils = require('../../Utils/Global');

const FabricaRepositorioAbstrata = require('./FabricaRepositorioAbstrata');
const UsuarioBDR = require('./UsuarioBDR');
const database = require('../../../database/db');

class FabricaRepositorioBDR extends FabricaRepositorioAbstrata {

    constructor() {
        super();
        (async () => {
            await database.sync();
        })();
    }

    criarRepositorioCartao() {
        // return 
    }
    criarRepositorioUsuario() {
        return new UsuarioBDR();
    }
    criarRepositorioCurso() {}
    criarRepositorioMatricula() {}
    criarRepositorioTransacao() {}

}

module.exports = FabricaRepositorioBDR;