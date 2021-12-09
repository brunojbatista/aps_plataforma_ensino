class Cartao {

    constructor({
        id, 
        numero, 
        bandeira, 
        usuario_id, 
        createdAt, 
        updatedAt
    }) {
        this.id = id;
        this.numero = numero;
        this.bandeira = bandeira;
        this.usuario_id = usuario_id;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }

    getCartao() {
        return {
            id: this.id,
            numero: this.numero,
            bandeira: this.bandeira,
            usuario_id: this.usuario_id,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt
        }
    }


}

module.exports = Cartao;
