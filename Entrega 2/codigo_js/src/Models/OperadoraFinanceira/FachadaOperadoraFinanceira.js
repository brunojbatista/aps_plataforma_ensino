const GlobalUtils = require('../../Utils/Global');

class FachadaOperadoraFinanceira {

    static async realizarPagamento(cartaoObj) {

        console.log(`Pagamento com o cartão ${cartaoObj.nome}`);

        await GlobalUtils.sleep(2);

        console.log(`A transação foi iniciado...`);

        await GlobalUtils.sleep(5);

        console.log("Pagamento realizado com sucesso!");

    }

}

module.exports = FachadaOperadoraFinanceira;