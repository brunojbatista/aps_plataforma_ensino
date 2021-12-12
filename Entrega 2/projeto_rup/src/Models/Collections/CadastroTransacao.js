const Transacao = require("./Entities/Transacao");

class CadastroTransacao {

    constructor(RepositorioTransacao) {
        // console.log(RepositorioTransacao);
        this.RepositorioTransacao = RepositorioTransacao;
    }

    async inserirTransacao(transacao_id, aluno_id, curso_id, cartao_id) {
        return new Transacao(await this.RepositorioTransacao.inserirTransacao(transacao_id, aluno_id, curso_id, cartao_id));
    }

}

module.exports = CadastroTransacao;