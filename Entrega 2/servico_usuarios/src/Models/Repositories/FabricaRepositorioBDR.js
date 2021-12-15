const FabricaRepositorioAbstrata    = require('./FabricaRepositorioAbstrata');
const RepositorioUsuarioBDR         = require('./BDR/RepositorioUsuarioBDR');

class FabricaRepositorioBDR extends FabricaRepositorioAbstrata {

    constructor() { super(); }

    criarRepositorioUsuario() {
        return new RepositorioUsuarioBDR();
    }
}

module.exports = FabricaRepositorioBDR;