const Fachada       = require('../Fachada');
const Formidable    = require('formidable');

exports.get = (req, res, next) => {
    res.status(200).send('Requisição recebida com sucesso!');
};

exports.matricularCurso = (req, res, next) => {

    var form = new Formidable.IncomingForm();

    form.parse(
        req, 
        async function (err, fields, files) {

            console.log(fields);

            try {
                var matricula = await Fachada.matricularCurso({
                    ...fields,
                    req
                });
                res.status(200).json({
                    'code': 200,
                    'msg': 'Matricula feita com sucesso!',
                    'body': matricula.getMatricula()
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