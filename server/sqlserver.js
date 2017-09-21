var sql=require("mssql");
var express = require('express');
var app=express();
let cors = require('cors');
app.use(cors());

//var config='mssql://mukesh:P@ssw0rd@192.168.252.30/ntlniitess_bkp';

var config = {user: 'sa', password: 'P@ssw0rd',server: '192.168.252.32\\MSSQL', database: 'ntlniitess',options: {    encrypt: false  }  };

sql.connect(config, function (err) {

   if (err) console.log(err);

   // create Request object
   var request = new sql.Request();

   // query to the database and get the records
  app.get('/getData/:empId',(req, res)=>{
   request.query( `SELECT EMPNO,NAME,DOJ,DESIGNATION,PRACTICE,OUTXT,PSATXT,SUPERVCODE FROM ZEMP_MAST_WEB_AL WHERE BASEEMP='`+req.params.empId+`'` , function (err, recordset) {

       if (err) console.log(err);
       else{

       // send records as a response
       /*console.log(recordset);*/
}
res.json(recordset.recordsets)
   });

});
})

app.listen(4002);