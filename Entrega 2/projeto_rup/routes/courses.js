var express = require('express');
var router = express.Router();
// const coursesController      = require('../src/Controllers/CoursesController')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* GET users detail. */
// router.get('/:id', usersController.getById);

// router.post('/cadastro', coursesController.cadastrarCurso);

// router.get('/listar', coursesController.listarCursos);


module.exports = router;
