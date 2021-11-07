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

app.get('/', (req, res) => {

    res.set('Content-Type', 'text/html');

    res.sendFile(GlobalUtils.getHTMLFile('TelaInicial'));
  
});


app.listen(process.env.PORT || port);