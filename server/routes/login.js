let express = require('express');
let router = express.Router();

//connection from mongo db database
let mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/centralAccess');
let db = mongoose.connection;

let data: string=[];

//validate token
router.get('/:token',function(req,res,next) {
   request.get('https://iniitiandev2.niit-tech.com/mobile/Cmn/CmnService/Authenticate?Token='+req.params.token,function(response,error, body){
   this.data = response;
if(this.data.isvalid == 'true')
   res.json({data: body});
   else
   	res.send(null);
 });
 })

module.exports = router;