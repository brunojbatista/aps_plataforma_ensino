var express = require('express');
var router = express.Router();
const UsersController      = require('../src/Controllers/UsersController')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* GET users detail. */
//router.get('/:id', UsersController.getById);

router.post('/cadastro', UsersController.cadastrarUsuario);

router.post('/autenticar', UsersController.autenticar);


module.exports = router;
