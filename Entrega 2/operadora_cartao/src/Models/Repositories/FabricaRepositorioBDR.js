const FabricaRepositorioAbstrata    = require('./FabricaRepositorioAbstrata');
const RepositorioUsuarioBDR         = require('./BDR/RepositorioUsuarioBDR');
const RepositorioCursoBDR           = require('./BDR/RepositorioCursoBDR');
const RepositorioCartaoBDR          = require('./BDR/RepositorioCartaoBDR');
// const CursoBDR          = require('./CursoBDR');
// const CartaoBDR         = require('./CartaoBDR');
// const MatriculaBDR      = require('./MatriculaBDR');

class FabricaRepositorioBDR extends FabricaRepositorioAbstrata {

    constructor() { super(); }

    criarRepositorioUsuario() {
        return new RepositorioUsuarioBDR();
    }

    criarRepositorioCurso() {
        return new RepositorioCursoBDR();
        // console.log("aaaaaaaaa")
    }

    criarRepositorioCartao() {
        return new RepositorioCartaoBDR();
    }

    // criarRepositorioUsuario() {
    //     return new UsuarioBDR();
    // }
    // 
    // criarRepositorioMatricula() {
    //     return new MatriculaBDR();
    // }
    // criarRepositorioTransacao() {}

}

module.exports = FabricaRepositorioBDR;