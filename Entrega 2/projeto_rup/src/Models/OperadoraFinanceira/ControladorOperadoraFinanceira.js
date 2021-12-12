// const OperadoraFinanceiraInterface = require("./OperadoraFinanceiraInterface")
const GlobalUtils     = require('../../../src/Utils/Global');
const axios = require('axios');


class ControladorOperadoraFinanceira {

    checarCartao(cartao) {
        return new Promise(
            async (resolve, reject) => {

                // Alguma lógica com a operadora financeira

                axios.post('http://localhost:3333/cartao/check', {
                    "cartao_id": cartao.id
                }).then(response => {
                    // console.log(`statusCode: ${response.status}`)
                    // console.log(response.data)
                    resolve(response.data)
                }).catch(error => {
                    console.error(error)
                    reject(error);
                })

                // await GlobalUtils.sleep(2);



                // const response = {
                //     "code": 200,
                //     "msg": "Cartão válido"
                // };

                // const response = {
                //     "code": 400,
                //     "msg": "Cartão inválido"
                // };

                // resolve(response);

            }
        );
    }

    pagarCartao(cartao, valor) {
        return new Promise(
            async (resolve, reject) => {

                // Alguma lógica com a operadora financeira

                axios.post('http://localhost:3333/cartao/payment', {
                    "cartao_id": cartao.id,
                    "valor": valor
                }).then(response => {
                    console.log(`statusCode: ${response.status}`)
                    console.log(response.data)
                    resolve(response.data)
                }).catch(error => {
                    console.error(error)
                    reject(error);
                })

                // await GlobalUtils.sleep(5);

                // const response = {
                //     'code': 200,
                //     'msg': 'Pagamento realizado com sucesso',
                //     'body': {
                //         'transacao_id': GlobalUtils.makeID(32)
                //     }
                // };

                // const response = {
                //     'code': 400,
                //     'msg': 'Saldo insuficiente'
                // };

                // resolve({
                //     'code': 200,
                //     'msg': 'Pagamento realizado com sucesso',
                //     'body': {
                //         'transacao_id': GlobalUtils.makeID(32)
                //     }
                // });

            }
        );
    }

}

module.exports = ControladorOperadoraFinanceira;