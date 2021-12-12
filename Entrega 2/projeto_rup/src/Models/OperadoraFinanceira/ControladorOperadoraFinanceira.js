// const OperadoraFinanceiraInterface = require("./OperadoraFinanceiraInterface")
const GlobalUtils     = require('../../../src/Utils/Global');


class ControladorOperadoraFinanceira {

    checarCartao(cartao) {
        return new Promise(
            async (resolve, reject) => {

                // Alguma lógica com a operadora financeira

                await GlobalUtils.sleep(2);

                const response = {
                    "code": 200,
                    "msg": "Cartão válido"
                };

                // const response = {
                //     "code": 400,
                //     "msg": "Cartão inválido"
                // };

                resolve(response);

            }
        );
    }

    pagarCartao(cartao, valor) {
        return new Promise(
            async (resolve, reject) => {

                // Alguma lógica com a operadora financeira

                await GlobalUtils.sleep(5);

                const response = {
                    'code': 200,
                    'msg': 'Pagamento realizado com sucesso',
                    'body': {
                        'transacao_id': GlobalUtils.makeID(32)
                    }
                };

                // const response = {
                //     'code': 400,
                //     'msg': 'Saldo insuficiente'
                // };

                resolve(response);

            }
        );
    }

}

module.exports = ControladorOperadoraFinanceira;