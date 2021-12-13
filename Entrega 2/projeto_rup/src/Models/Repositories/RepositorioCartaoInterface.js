// const GlobalUtils = require('../../Utils/Global');

class RepositorioCartaoInterface {

    constructor() {}

    inserirCartao(
        numero,
        bandeira,
        usuario_id
    ) {}

    hasNumero(numero) {}

    // inserirCartao(usuario_id) {}

    getCartao(cartao_id, usuario_id) {}

    listarCartoes(usuario_id) {}

}

module.exports = RepositorioCartaoInterface;