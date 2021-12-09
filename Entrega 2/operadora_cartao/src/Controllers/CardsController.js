const Fachada           = require('../Fachada');
// const { IncomingForm }  = require('formidable');
const Formidable    = require('formidable');

exports.cadastrarCartao = async (req, res, next) => {

    // try {
    //     const cursos = await Fachada.listarCursos();
    //     res.status(200).json({
    //         'code': 200,
    //         'msg': 'Cursos listado com sucesso',
    //         'body': cursos
    //     });
    // } catch (e) {
    //     res.status(400).json({
    //         'code': 400,
    //         'msg': e
    //     });
    // }

    var form = new Formidable.IncomingForm();

    form.parse(
        req, 
        async function (err, fields, files) {
    
            console.log('fields', fields);

            try {
                const cartao = await Fachada.cadastrarCartao({
                    ...fields,
                    req
                });
                res.status(200).json({
                    'code': 200,
                    'msg': 'Cartao adicionado com sucesso!',
                    'body': {
                        'numero': cartao.numero,
                        'bandeira': cartao.bandeira,
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

exports.listarCartoes = async (req, res, next) => {

    try {
        // res.status(200).json({
        //     'code': 200,
        //     'msg': 'Cartões listado com sucesso!'
        // });
        const cartoes = await Fachada.listarCartoes({
            req
        });
        res.status(200).json({
            'code': 200,
            'msg': 'Cartões listado com sucesso!',
            'body': cartoes
        });
    } catch (e) {
        res.status(400).json({
            'code': 400,
            'msg': e
        });
    }
    
};

exports.getCartao = async (req, res, next) => {

    try {
        const cartao = await Fachada.getCartao({
            ...req.params,
            req
        });
        res.status(200).json({
            'code': 200,
            'msg': 'Cartão listado com sucesso!',
            'body': cartao
        });
    } catch (e) {
        res.status(400).json({
            'code': 400,
            'msg': e
        });
    }
    
};