const FabricaRepositorioAbstrata    = require('./FabricaRepositorioAbstrata');
const RepositorioUsuarioBDR         = require('./BDR/RepositorioUsuarioBDR');
const RepositorioCursoBDR           = require('./BDR/RepositorioCursoBDR');
const RepositorioCartaoBDR          = require('./BDR/RepositorioCartaoBDR');
const RepositorioMatriculaBDR       = require('./BDR/RepositorioMatriculaBDR');
const RepositorioTransacaoBDR       = require('./BDR/RepositorioTransacaoBDR');
const RepositorioSessaoBDR          = require('./BDR/RepositorioSessaoBDR');
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

    criarRepositorioMatricula() {
        return new RepositorioMatriculaBDR();
    }

    criarRepositorioTransacao() {
        return new RepositorioTransacaoBDR();
    }

    criarRepositorioSessao() {
        return new RepositorioSessaoBDR();
    }

}

module.exports = FabricaRepositorioBDR;