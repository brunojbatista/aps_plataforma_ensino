const Cartao = require("./Entities/Cartao");

class CadastroCartao {

    constructor(RepositorioCartao) {
        // console.log(RepositorioCartao);
        this.RepositorioCartao = RepositorioCartao;
    }

    async hasNumero(numero) {
        return await this.RepositorioCartao.hasNumero(numero);
    }

    async inserirCartao(
        numero,
        bandeira,
        usuario_id
    ) {
        // console.log("inserirCartao......................");
        // return {'id': 10, 'numero': 845646, 'createdAt': 'dia criado', 'updatedAt': 'dia atualizado', 'usuario_id': 100};
        const cartao = await this.RepositorioCartao.inserirCartao(
            numero,
            bandeira,
            usuario_id
        );
        // console.log("inserirCartao - cartao", cartao);
        return new Cartao(cartao.dataValues);
    } 

    async listarCartoes(usuario_id) {
        return await this.RepositorioCartao.inserirCartao(
            usuario_id
        )
    }

    async getCartao(
        cartao_id,
        usuario_id
    ) {
        return new Cartao(await this.RepositorioCartao.getCartao(
            cartao_id,
            usuario_id
        ));
    }

}

module.exports = CadastroCartao;