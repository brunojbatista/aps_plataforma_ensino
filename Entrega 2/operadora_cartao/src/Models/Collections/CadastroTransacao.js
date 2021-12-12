const Transacao = require("./Entities/Transacao");

class CadastroTransacao {

    constructor(RepositorioTransacaoInterface) {
        // console.log(RepositorioTransacaoInterface);
        this.RepositorioTransacaoInterface = RepositorioTransacaoInterface;
    }

}

module.exports = CadastroTransacao;