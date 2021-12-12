var express = require('express');
const Formidable    = require('formidable');
var router = express.Router();

router.post('/teste', function(req, res, next) {
    
  // console.log("teste...................");

  res.set('Content-Type', 'text/html');

  console.log(req.body)

  res.send('respond with a resource');

  // res.status(200).json({
  //     'code': 200,
  //     'msg': 'Débito liberado'
  // });

  // var form = new Formidable.IncomingForm();

  // form.parse(
  //     req,
  //     async function (err, fields, files) {

  //         try {
  //             var usuario = await Fachada.cadastrarUsuario(
  //                 fields
  //             );
  //             res.status(200).json({
  //                 'code': 200,
  //                 'msg': 'Usuário cadastrado com sucesso!'
  //             });
  //         } catch (e) {
  //             res.status(400).json({
  //                 'code': 400,
  //                 'msg': e
  //             });
  //         }

  //     }
  // );   

});

module.exports = router;
