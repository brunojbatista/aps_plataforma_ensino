var express = require('express');
var router = express.Router();
const CardsController      = require('../src/Controllers/CardsController')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('get card');
});

/* GET users detail. */
// router.get('/:id', CardsController.getById);

router.post('/cadastro', CardsController.cadastrarCartao);

router.get('/listar', CardsController.listarCartoes);

router.get('/:cartao_id', CardsController.getCartao);



module.exports = router;
