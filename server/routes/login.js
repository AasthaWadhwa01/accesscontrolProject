let express = require('express');
let router = express.Router();
var request = require('request');

//connection from mongo db database
let mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/centralAccess');
let db = mongoose.connection;

//validate token
router.get('/:token',function(req,res,next) {
   request.get('https://iniitiandev2.niit-tech.com/mobile/Cmn/CmnService/Authenticate?Token='+req.params.token,
   	function(error, response, body){
  let data = response;
if(data.isvalid == 'true')
   res.json(body);
   else
   	res.send(null);
 });
 })

module.exports = router;
