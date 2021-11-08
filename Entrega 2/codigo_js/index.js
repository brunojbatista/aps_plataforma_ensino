const port = 3030;

const express         = require('express');
const bodyParser      = require('body-parser');
const formidable      = require('formidable');
const fs              = require('fs-extra');
const cookieParser    = require('cookie-parser');
const path            = require('path');
const browser         = require('detect-browser');
const md5             = require('md5');
const requestIp       = require('request-ip');
const GlobalUtils     = require('./src/Utils/Global');

// const getHTMLFile = (name) => {
//     return  `${__dirname}/src/Views/${name}.html`;
// }

app = express();

app.use(
    express.static(__dirname + '/public')
);

app.use(
    requestIp.mw({ 
        attributeName : 'ip' 
    })
);

app.use(
    bodyParser.urlencoded({
	    extended: false
    })
);

app.use(
    bodyParser.json()
);

app.use(
    cookieParser()
);

app.get('/TelaLogin', (req, res) => {

    res.set('Content-Type', 'text/html');

    res.sendFile(GlobalUtils.getHTMLFile('TelaLogin'));
  
});

app.get('/CadastroAluno', (req, res) => {

    res.set('Content-Type', 'text/html');

    res.sendFile(GlobalUtils.getHTMLFile('CadastroAluno'));
  
});

app.get('/TelaApresentacao', (req, res) => {

    res.set('Content-Type', 'text/html');

    res.sendFile(GlobalUtils.getHTMLFile('TelaApresentacao'));
  
});

app.get('/CadastroCurso', (req, res) => {

    res.set('Content-Type', 'text/html');

    res.sendFile(GlobalUtils.getHTMLFile('CadastroCurso'));
  
});

app.get('/TelaInicial', (req, res) => {

    res.set('Content-Type', 'text/html');

    res.sendFile(GlobalUtils.getHTMLFile('TelaInicial'));
  
});

app.get('/TelaCurso', (req, res) => {

    res.set('Content-Type', 'text/html');

    res.sendFile(GlobalUtils.getHTMLFile('TelaCurso'));
  
});





app.listen(process.env.PORT || port);