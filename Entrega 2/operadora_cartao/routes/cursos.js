var express = require('express');
var router = express.Router();
const CoursesController      = require('../src/Controllers/CoursesController');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* GET users detail. */
//router.get('/:id', usersController.getById);

router.post('/cadastro', CoursesController.cadastrarCurso);

router.get('/listar', CoursesController.listarCursos);

router.get('/professor', CoursesController.cursosByProfessor);

router.get('/:id', CoursesController.getCurso);


module.exports = router;
