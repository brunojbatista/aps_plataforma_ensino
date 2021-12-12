const OperadoraFinanceiraInterface      = require("./OperadoraFinanceiraInterface");
const ControladorOperadoraFinanceira    = require("./ControladorOperadoraFinanceira");
const GlobalUtils     = require('../../../src/Utils/Global');


class OperadoraFinanceiraFachada extends OperadoraFinanceiraInterface {

    constructor () { 
        super(); 
        this.ControladorOperadoraFinanceira = new ControladorOperadoraFinanceira();
    }

    async checarCartao(cartao) {
        const response = await this.ControladorOperadoraFinanceira.checarCartao(cartao);
        if (response.code >= 400) throw response.msg;
        return true;
    }

    async pagarCartao(cartao, valor) {
        const response = await this.ControladorOperadoraFinanceira.pagarCartao(cartao, valor);
        if (response.code >= 400) throw response.msg;
        return response.body.transacao_id;
    }

}

module.exports = OperadoraFinanceiraFachada;