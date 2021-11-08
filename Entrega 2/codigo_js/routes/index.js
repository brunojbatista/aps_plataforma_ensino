var express = require('express');
const GlobalUtils = require("../src/Utils/Global");
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

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

// const Sessao     = require('../src/Models/Sessao');

// router.get('/teste', async (req, res) => {

//   let sessao = new Sessao(req, res);

//   // console.log(sessao);

//   console.log(sessao.isLogged());

//   // console.log(sessao.setLogged());

//   // const sequelize = new Sequelize('plataforma', 'root', 'root', {
//   //     host: 'localhost',
//   //     dialect: 'mysql'
//   // });

//   // console.log(sequelize);

//   // try {
//   //     await sequelize.authenticate();
//   //     console.log('Connection has been established successfully.');
//   //   } catch (error) {
//   //     console.error('Unable to connect to the database:', error);
//   //   }

//   res.set('Content-Type', 'text/html');

//   res.sendFile(GlobalUtils.getHTMLFile('TelaInicial'));

// });

module.exports = router;
