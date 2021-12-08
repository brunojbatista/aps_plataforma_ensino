// const GlobalUtils = require('../../Utils/Global');
const RepositorioCartaoInterface = require("../RepositorioCartaoInterface");
const CartaoModel = require('../../../../database/models/Cartao');
const sequelize = require("../../../../database/db");

/*
    Classe para fazer consulta no banco de dados em relação a classe
    de cartões
*/

class RepositorioCartaoBDR extends RepositorioCartaoInterface {

    constructor() { super(); }

    async hasNumero(numero) {
        const [results] = await sequelize.query(`SELECT id FROM cartaos WHERE numero = '${numero}'`);
        return results.length > 0;
    }

    async inserirCartao(
        numero,
        bandeira,
        usuario_id
    ) {
        // return {'id': 10, 'numero': 845646, 'createdAt': 'dia criado', 'updatedAt': 'dia atualizado', 'usuario_id': 100};
        return await CartaoModel.create({
            numero,
            bandeira,
            usuario_id
        });
    }

    async inserirCartao(usuario_id) {
        const [results] = await sequelize.query(`
            SELECT *
            FROM cartaos c
            WHERE c.usuario_id = '${usuario_id}'
        `);
        return results;
    }

    async getCartao(cartao_id, usuario_id) {
        const [results] = await sequelize.query(`
            SELECT *
            FROM cartaos c
            WHERE c.usuario_id = '${usuario_id}' AND c.id = '${cartao_id}'
        `);
        if (results.length <= 0) throw "Cartão nao existe";
        return results[0];
    }

}

module.exports = RepositorioCartaoBDR;