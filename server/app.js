let express = require('express');
let app = express();
let path = require('path');
let bodyParser = require('body-parser');
let routes = require('./routes/access.route');

let mongoose = require('mongoose');
let cors = require('cors');
let config = require('./config/config');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', routes);

// error handler
app.use(function(err, req, res, next) {

    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    
    // render the error page
    res.status(err.status || 500);
    res.render('Internal server Error');
});
app.listen(config.port);

module.exports = app;