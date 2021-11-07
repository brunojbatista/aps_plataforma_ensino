var express = require('express');
const GlobalUtils = require("../src/Utils/Global");
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  res.set('Content-Type', 'text/html');

  res.sendFile(GlobalUtils.getHTMLFile('TelaInicial'));
});

module.exports = router;
