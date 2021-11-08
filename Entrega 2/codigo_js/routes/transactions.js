var express = require('express');
var router = express.Router();
const transactionsController      = require('../src/Controllers/TransactionsController')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* GET users detail. */
router.get('/:id', transactionsController.getById);

module.exports = router;
