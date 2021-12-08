const Fachada           = require('../Fachada');
const Formidable    = require('formidable');

exports.cadastrarCurso = (req, res, next) => {

    var form = new Formidable.IncomingForm();

    form.parse(
        req, 
        async function (err, fields, files) {
    
            // console.log('fields', fields);
            
            try {
                const curso = await Fachada.criarCurso({
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

exports.listarCursos = async (req, res, next) => {

    try {
        const cursos = await Fachada.listarCursos();
        res.status(200).json({
            'code': 200,
            'msg': 'Cursos listado com sucesso',
            'body': cursos
        });
    } catch (e) {
        res.status(400).json({
            'code': 400,
            'msg': e
        });
    }
    
};

exports.cursosByProfessor = async (req, res, next) => {

    try {
        const cursos = await Fachada.cursosByProfessor({
            req
        });
        res.status(200).json({
            'code': 200,
            'msg': 'Cursos listado com sucesso',
            'body': cursos
        });
    } catch (e) {
        res.status(400).json({
            'code': 400,
            'msg': e
        });
    }
    
};

exports.getCurso = async (req, res, next) => {

    let params = req.params;

    try {
        const curso = await Fachada.getCurso({
            ...params
        });
        res.status(200).json({
            'code': 200,
            'msg': 'Curso retornado com sucesso',
            'body': curso
        });
    } catch (e) {
        res.status(400).json({
            'code': 400,
            'msg': e
        });
    }
    
};

