const port = 8080;

const express         = require('express');
const bodyParser      = require('body-parser');
const formidable      = require('formidable');
const fs              = require('fs-extra');
const cookieParser    = require('cookie-parser');
const path            = require('path');
const browser         = require('detect-browser');
const md5             = require('md5');
const requestIp       = require('request-ip');

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
    res.send("Página principal");
  
});

// app.get('/teste', (req, res) => {

//     console.log("teste...");
  
// });


app.listen(process.env.PORT || port);