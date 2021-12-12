var express = require('express');
var router = express.Router();
const EnrollmentsController      = require('../src/Controllers/EnrollmentsController');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* GET users detail. */
//router.get('/:id', usersController.getById);

router.post('/curso', EnrollmentsController.matricularCurso);


module.exports = router;
