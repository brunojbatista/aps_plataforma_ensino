var express = require('express');
var router = express.Router();
const usersController      = require('../src/Controllers/UsersController')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* GET users detail. */
//router.get('/:id', usersController.getById);

router.post('/cadastro', usersController.cadastrarUsuario);

router.post('/autenticar', usersController.autenticar);


module.exports = router;
