var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
// var usuariosRouter = require('./routes/usuarios');
// var cursosRouter = require('./routes/cursos');
// var cartoesRouter = require('./routes/cartoes');
// var testeRouter = require('./routes/test');
const requestIp = require("request-ip");

const bodyParser      = require('body-parser');
const formidable      = require('formidable');
const fs              = require('fs-extra');
const browser         = require('detect-browser');
const md5             = require('md5');
const GlobalUtils     = require('./src/Utils/Global');

// const database      = require('./database/db');

// (async () => {
//   await database.sync();
//   // await database.sync({force: true});
// })();

var app = express();

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

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '/public/')));

app.use('/', indexRouter);
// app.use('/testes', testeRouter);
// app.use('/usuarios', usuariosRouter);
// app.use('/cursos', cursosRouter);
// app.use('/cartoes', cartoesRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
