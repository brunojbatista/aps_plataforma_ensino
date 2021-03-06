require('dotenv').config()
const port = process.env.HTTP_PORT || 3000;

const express         = require('express');
const bodyParser      = require('body-parser');
const formidable      = require('formidable');
const fs              = require('fs-extra');
const cookieParser    = require('cookie-parser');
const path            = require('path');
const browser         = require('detect-browser');
const md5             = require('md5');
const requestIp       = require('request-ip');
// const GlobalUtils     = require('./src/Utils/Global');
const axios           = require('axios');

const { Sequelize } = require('sequelize');



// const getHTMLFile = (name) => {
//     return  `${__dirname}/src/Views/${name}.html`;
// }

app = express();

app = axios();

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

const Sessao     = require('./src/Models/Sessao');
const request   = require('request');


// app.get('/', async (req, res) => {

//     let sessao = new Sessao(req, res);

//     // console.log(sessao);

//     console.log(sessao.isLogged());

//     // console.log(sessao.setLogged());

//     // const sequelize = new Sequelize('plataforma', 'root', 'root', {
//     //     host: 'localhost',
//     //     dialect: 'mysql'
//     // });

//     // console.log(sequelize);

//     // try {
//     //     await sequelize.authenticate();
//     //     console.log('Connection has been established successfully.');
//     //   } catch (error) {
//     //     console.error('Unable to connect to the database:', error);
//     //   }

//     res.set('Content-Type', 'text/html');

//     res.sendFile(GlobalUtils.getHTMLFile('TelaInicial'));
  
// });

// app.get('/TelaCurso', (req, res) => {

//     res.set('Content-Type', 'text/html');

//     res.sendFile(GlobalUtils.getHTMLFile('TelaCurso'));
  
// });


app.listen(process.env.PORT || port);