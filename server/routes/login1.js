/*let express = require('express');
let router = express.Router();
var request = require('request');
var data;
let sql = require("mssql");

let con = require('../config/config');

//validate token
router.get('/validateToken',function(req,res,next) {
   request.get('https://iniitiandev2.niit-tech.com/mobile/Cmn/CmnService/Authenticate?Token='+req.headers['authorization'],
    function(error, response, body){
   data = JSON.parse(body);
  res.json(data)
})
 });


//configuartion file for connection
sql.connect(con.config, function(err) {
    if (err) console.log(err);
    // create sqlRequest object
    var sqlRequest = new sql.Request();

if(data.isvalid){

router.get('/verifyHr',function(req,res,next) {
	sqlRequest.query(`SELECT * FROM ecc_authorization WHERE in_rolecode IN(3) AND  bit_active = 1 AND ch_empcode ='`+data.UserID+`'` , function (err, recordset) {
       if (err) console.log(err);
       else{
        res.json(recordset.recordsets[0][0])
     }
				})
})

router.get('/verifyCso',function(req,res,next) {	
	sqlRequest.query(`SELECT * FROM ecc_authorization WHERE in_rolecode IN(9) AND  bit_active = 1 AND ch_empcode ='`+data.UserID+`'` , function (err, recordset) {
       if (err) console.log(err);
       else{
       res.json(recordset.recordsets[0][0])
     }
   	});
})

router.get('/verifySuper',function(req,res,next) {	
	sqlRequest.query(`SELECT * FROM ecc_authorization WHERE in_rolecode IN(15) AND  bit_active = 1 AND ch_empcode ='`+data.UserID+`'` , function (err, recordset) {
       if (err) console.log(err);
       else{
       	res.json(recordset.recordsets[0][0])
				}
   	});
	})
  }   
   else{
   	res.send("error");
   }
})

module.exports = router;
*/