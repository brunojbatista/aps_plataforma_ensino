const Fachada           = require('../Fachada');
const Formidable    = require('formidable');

exports.cadastrarUsuario = (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');

    // var fabrica = new FabricaRepositorioBDR();

    // var usuario = fabrica.criarRepositorioUsuario();

    // console.log(req.body);

    var form = new Formidable.IncomingForm();

    form.parse(
        req,
        async function (err, fields, files) {

            try {
                var usuario = await Fachada.cadastrarUsuario(
                    fields
                );
                res.status(200).json({
                    'code': 200,
                    'msg': 'Usuário cadastrado com sucesso!'
                });
            } catch (e) {
                res.status(400).json({
                    'code': 400,
                    'msg': e
                });
            }

        }
    );

}

exports.autenticar = (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');

    var params = {
        res,
        req
    }
    
    var form = new Formidable.IncomingForm();

    form.parse(
        req, 
        async function (err, fields, files) {

            params = {
                ...params,
                ...fields
            };

            try {
                const usuario = await Fachada.autenticar(
                    params
                );
                res.status(200).json({
                    'code': 200,
                    'msg': 'Usuário autenticado com sucesso!',
                    'body': {
                        'id': usuario.id,
                        'session_hash': usuario.session_hash
                    }
                });
            } catch (e) {
                res.status(400).json({
                    'code': 400,
                    'msg': e
                });
            }

        }
    );
    
};