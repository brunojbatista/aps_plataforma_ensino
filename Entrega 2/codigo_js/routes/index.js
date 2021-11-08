var express = require('express');
const GlobalUtils = require("../src/Utils/Global");
var router = express.Router();

/* GET home page. */
router.get('/TelaLogin', function(req, res, next) {

  res.set('Content-Type', 'text/html');

  res.sendFile(GlobalUtils.getHTMLFile('TelaLogin'));
});

router.get('/TelaInicial', function(req, res, next) {

  res.set('Content-Type', 'text/html');

  res.sendFile(GlobalUtils.getHTMLFile('TelaInicial'));
});

router.get('/TelaCurso', function(req, res, next) {

  res.set('Content-Type', 'text/html');

  res.sendFile(GlobalUtils.getHTMLFile('TelaCurso'));
});

router.get('/CadastroAluno', function(req, res, next) {

  res.set('Content-Type', 'text/html');

  res.sendFile(GlobalUtils.getHTMLFile('CadastroAluno'));
});

router.get('/CadastroCurso', function(req, res, next) {

  res.set('Content-Type', 'text/html');

  res.sendFile(GlobalUtils.getHTMLFile('CadastroCurso'));
});

router.get('/TelaApresentacao', function(req, res, next) {

  res.set('Content-Type', 'text/html');

  res.sendFile(GlobalUtils.getHTMLFile('TelaApresentacao'));
});

module.exports = router;
