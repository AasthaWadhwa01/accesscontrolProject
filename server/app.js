var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var router = require('./routes/show');
var mongoose = require('mongoose');
let cors = require('cors');

let con = require('./config/config');

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', router);

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('Internal server Error');
});

app.listen(con.port);
module.exports = app;