var express = require('express');
var app=express();
var path=require('path');
var bodyParser=require('body-parser');
var router=require('./routes/show');
// var thirdParty=require('./routes/thirdPartPost');
/*to apply different http requests across the body*/

var mongoose=require('mongoose');
let cors = require('cors');
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
 

app.use('/',router);
// app.use('/',thirdParty);
// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(4000);

module.exports=app;
