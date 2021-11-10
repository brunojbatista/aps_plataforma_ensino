const Fachada           = require('./Fachada');
// const { IncomingForm }  = require('formidable');
const Formidable    = require('formidable');

exports.get = (req, res, next) => {
    res.status(200).send('Requisição recebida com sucesso!');
};

exports.getById = (req, res, next) => {
    let id = req.params.id;
    res.status(200).send(`Requisição recebida com sucesso! user_id: ${id}`);
};

exports.post = (req, res, next) => {
    res.status(201).send('Requisição recebida com sucesso!' + JSON.stringify(req.body));
};

exports.put = (req, res, next) => {
    let id = req.params.id;
    res.status(201).send(`Requisição recebida com sucesso! ${id}`);
};

exports.delete = (req, res, next) => {
    let id = req.params.id;
    res.status(200).send(`Requisição recebida com sucesso! ${id}`);
};

const FabricaRepositorioBDR = require('../Models/Repositorio/FabricaRepositorioBDR');

exports.cadastrarUsuario = (req, res, next) => {
    
    // var fabrica = new FabricaRepositorioBDR();

    // var usuario = fabrica.criarRepositorioUsuario();

    // console.log(req.body);

    var form = new Formidable.IncomingForm();

    form.parse(
        req, 
        async function (err, fields, files) {

            try {
                await Fachada.cadastrarUsuario(
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

    // var form = new Formidable.IncomingForm();

    // form.parse(req, async function (err, fields, files) {
    
    //     // console.log(fields);

    //     try {
    //         await Fachada.cadastrarUsuario(
    //             fields
    //         );
    //         res.status(200).json({
    //             'code': 200,
    //             'msg': 'Usuário cadastrado com sucesso!'
    //         });
    //     } catch (e) {
    //         res.status(400).json({
    //             'code': 400,
    //             'msg': e
    //         });
    //     }

    // });
    

    



    // try {
    //     Fachada.cadastrarUsuario(
    //         req.body.cpf,
    //         req.body.nome,
    //         req.body.login,
    //         req.body.senha,
    //         req.body.email,
    //         req.body.telefone
    //     );
    //     res.status(200).json({
    //         'code': 200,
    //         'msg': 'Usuário cadastrado com sucesso!'
    //     });
    // } catch (e) {
    //     res.status(400).json({
    //         'code': 400,
    //         'msg': e
    //     });
    // }
    // res.status(200).send(`Requisição recebida com sucesso!`);
};

exports.autenticar = (req, res, next) => {

    var params = {
        res
    }
    
    var form = new Formidable.IncomingForm();

    form.parse(
        req, 
        async function (err, fields, files) {
    
            // console.log(fields);

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