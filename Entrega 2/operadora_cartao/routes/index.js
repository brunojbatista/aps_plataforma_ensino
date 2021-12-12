var express = require('express');
const Formidable    = require('formidable');
var router = express.Router();
const GlobalUtil = require('../src/Utils/Global');

router.post('/cartao/check', async function(req, res, next) {

    await GlobalUtil.sleep(2);
 
    res.set('Content-Type', 'application/json');

    res.status(200).json({
        'code': 200,
        'msg': 'Cartão válido'
    });

    // res.status(200).json({
    //     'code': 400,
    //     'msg': 'Cartão inválido'
    // });

});

router.post('/cartao/payment', async function(req, res, next) {

    await GlobalUtil.sleep(2);

    res.set('Content-Type', 'application/json');

    res.status(200).json({
        'code': 200,
        'msg': 'Pagamento realizado com sucesso',
        'body': {
            'transacao_id': GlobalUtil.makeID(32)
        }
    });

    // res.status(200).json({
    //     'code': 400,
    //     'msg': 'Limite insuficiente'
    // });

});

router.post('/teste', function(req, res, next) {

    res.set('Content-Type', 'application/json');

    res.status(200).json({
        'code': 200,
        'msg': `Pagamento efetuado com sucesso`
    });

});

module.exports = router;
