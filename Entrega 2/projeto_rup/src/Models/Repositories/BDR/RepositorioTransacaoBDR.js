const RepositorioTransacaoInterface = require("../RepositorioTransacaoInterface");
const TransacaoModel = require('../../../../database/models/Transacao');
const sequelize = require("../../../../database/db");

class RepositorioTransacaoBDR extends RepositorioTransacaoInterface {

    constructor() { super(); }

    // async hasMatricula(curso_id, aluno_id) {
    //     const [results] = await sequelize.query(`SELECT id FROM matriculas WHERE curso_id = '${curso_id}' and aluno_id = '${aluno_id}'`);
    //     return results.length > 0;
    // }

    // async inserirMatricula(curso_id, aluno_id) {
    //     return await MatriculaModel.create({
    //         curso_id,
    //         aluno_id
    //     });
    // }

    async inserirTransacao(transacao_id, aluno_id, curso_id, cartao_id) {
        return await TransacaoModel.create({
            transacao_id,
            aluno_id,
            curso_id,
            cartao_id
        });
    }

}

module.exports = RepositorioTransacaoBDR;