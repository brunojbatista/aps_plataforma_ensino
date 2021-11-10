var express = require('express');
var router = express.Router();
const cardsController      = require('../src/Controllers/CardsController')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('get card');
});

/* GET users detail. */
// router.get('/:id', cardsController.getById);

// router.post('/cadastro', cardsController.cadastrarUsuario);

router.post('/cadastro', cardsController.cadastrarCartao);


module.exports = router;
