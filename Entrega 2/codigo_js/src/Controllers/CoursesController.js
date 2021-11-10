const Fachada           = require('./Fachada');
// const { IncomingForm }  = require('formidable');
const Formidable    = require('formidable');

exports.cadastrarCurso = (req, res, next) => {

    var form = new Formidable.IncomingForm();

    form.parse(
        req, 
        async function (err, fields, files) {
    
            console.log('fields', fields);
            
            try {
                const usuario = await Fachada.criarCurso({
                    ...fields,
                    req
                });
                res.status(200).json({
                    'code': 200,
                    'msg': 'Curso criado com sucesso!',
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