// const GlobalUtils = require('../../Utils/Global');

const FabricaRepositorioAbstrata = require('./FabricaRepositorioAbstrata');
const UsuarioBDR    = require('./UsuarioBDR');
const CursoBDR      = require('./CursoBDR');
const CartaoBDR     = require('./CartaoBDR');
// const database      = require('../../../database/db');

class FabricaRepositorioBDR extends FabricaRepositorioAbstrata {

    constructor() {
        super();
        // (async () => {
        //     await database.sync();
        //     // await database.sync({force: true});
        // })();
    }

    criarRepositorioCartao() {
        return new CartaoBDR();
    }
    criarRepositorioUsuario() {
        return new UsuarioBDR();
    }
    criarRepositorioCurso() {
        return new CursoBDR();
    }
    criarRepositorioMatricula() {}
    criarRepositorioTransacao() {}

}

module.exports = FabricaRepositorioBDR;