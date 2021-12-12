var express = require('express');
var router = express.Router();
// const testController      = require('../src/Controllers/TestController')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* GET users detail. */
// router.get('/:id', usersController.getById);

// router.post('/testarMatricula', testController.testarMatricula);

// router.post('/testarCursosMatriculados', testController.testarCursosMatriculados);

module.exports = router;
