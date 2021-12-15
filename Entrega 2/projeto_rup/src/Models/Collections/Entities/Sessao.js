class Sessao {

    constructor({
        id, 
        session_hash, 
        usuario_id,
        createdAt, 
        updatedAt
    }) {
        this.id = id;
        this.session_hash = session_hash;
        this.usuario_id = usuario_id;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }

    getSessao() {
        return {
            id: this.id,
            session_hash: this.session_hash,
            usuario_id: this.usuario_id,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt,
        }
    }


}

module.exports = Sessao;
