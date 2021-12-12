class Transacao {

    constructor({
        id, 
        transacao_id, 
        aluno_id,
        curso_id,
        cartao_id,
        createdAt, 
        updatedAt
    }) {
        this.id = id;
        this.transacao_id = transacao_id;
        this.aluno_id = aluno_id;
        this.curso_id = curso_id;
        this.cartao_id = cartao_id;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }

    getTransacao() {
        return {
            id: this.id,
            aluno_id: this.aluno_id,
            curso_id: this.curso_id,
            cartao_id: this.cartao_id,
            curso_id: this.curso_id,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt,
        }
    }

}

module.exports = Transacao;
