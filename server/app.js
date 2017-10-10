var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var approver = require('./routes/approver');
var damage = require('./routes/damage');
var employee = require('./routes/employee');
var locationchange = require('./routes/locationchange');
var lostcard = require('./routes/lostcard');
var requester = require('./routes/requester');
var thirdparty = require('./routes/thirdparty');

var mongoose = require('mongoose');
let cors = require('cors');

let con = require('./config/config');

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/employee', employee);
app.use('/approver', approver);
app.use('/damage', damage);
app.use('/locationchange', locationchange);
app.use('/thirdparty', thirdparty);
app.use('/lostcard', lostcard);
app.use('/requester', requester);

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
