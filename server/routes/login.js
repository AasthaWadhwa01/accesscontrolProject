let express = require('express');
let router = express.Router();
var request = require('request');

let sql = require("mssql");

let logger = require('../services/app.logger');
let con = require('../config/config');
let httpstatus = require('../config/httpmsg');

//configuartion file for connection
sql.connect(con.config, function(err) {
    if (err) console.log(err);
    // create sqlRequest object
    var sqlRequest = new sql.Request();

//validate token
router.get('/',function(req,res,next) {
   request.get('https://iniitiandev2.niit-tech.com/mobile/Cmn/CmnService/Authenticate?Token='+req.headers.authorization,
   	function(error, response, body){
  let data = JSON.parse(body);
  let role ='';

if(data.isvalid){

	sqlRequest.query( `SELECT in_rolecode FROM ecc_authorization WHERE  bit_active = 1 AND ch_empcode ='`+ req.headers['authorization'] +`'` , function (err, recordset) {
   
       if (err) {
        res.status(httpstatus.internalerror.code).send({success:false,message:'',data:err.toString()});
      }
        let hrroles = recordset.recordset.filter((role) =>{
          return role.in_rolecode === 3;
        })
        let csoroles = recordset.recordset.filter((role) =>{
          return role.in_rolecode === 9;
        })
        let suproles = recordset.recordset.filter((role) =>{
          return role.in_rolecode === 15;
        })
        if(hrroles.length >0){
          role = 'HR';
        } else if(csoroles.length >0) {
          role = 'CSO';
        } else if(suproles.length >0) {
          role = 'SUPERVISOR';
        } else {
          role = 'EMPLOYEE';
        }
        data.role= role;
        res.status(httpstatus.success.code).json({success:true,message:'token validated',data:data});
     
   	});

}
   else{
   	res.status().send({success:false,message:'invalid token'});
   }
 });
 })

router.get('/getData/:empId', (req, res) => {
  try{
        sqlRequest.query(con.query + req.params.empId + `'`, function(err, recordset) {
          // res.status(httpstatus.success.code).json({ success: true, message:'get data', data: recordset.recordsets });
          logger.info(con.messages.employeedata);
           res.json(recordset.recordsets)
        });
      }
      catch(error)
      {
        logger.error(con.messages.servererror)
        return res.status(httpstatus.internalerror.code).json({ success: false, message: httpstatus.internalerror.msg, data: error.toString() });
      }
});

})

module.exports = router;
