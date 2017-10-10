/*let express = require('express');
let router = express.Router();

let sql = require("mssql");

let con = require('../config/config');

//configuartion file for connection
sql.connect(con.config, function(err) {
    if (err) console.log(err);
    // create Request object
    var request = new sql.Request();
    // query to the database and get the records
    router.get('/getData/:empId', (req, res) => {
        request.query(con.query + req.params.empId + `'`, function(err, recordset) {
            if (err) console.log(err);
            else {
                // send records as a response
            }
            res.json(recordset.recordsets)
        });
    });

    router.get('/getHrData/:empId',(req, res)=>{
   request.query( `SELECT EA.ch_empcode AS EmpCode

FROM ZEMP_MAST_WEB_AL EM WITH(FORCESEEK INDEX (noncidx_ZEMP_MAST_WEB_AL_EMPNO_OU_PA_PSA_VDSK1_BA_PLAN1))
INNER JOIN ecc_authorization EA --WITH(INDEX (noncidx_ecc_authorization_rolecode_ou_pa_psa_orgkey_ba_plan_active)) 
ON EM.OU LIKE EA.vc_ou + '%' AND EM.PA LIKE EA.vc_pa + '%' AND EM.PSA LIKE EA.vc_psa + '%' 
AND EM.VDSK1 LIKE EA.ch_orgkey + '%' AND EM.BA LIKE EA.vc_ba + '%'
--AND EM.PLAN1 LIKE EA.vc_plan + '%' 
AND EA.bit_active = 1 AND EM.EMPNO = '`+req.params.empId+`'
AND EXISTS 
(
	SELECT 'X' FROM dbo.fn_GetTableFromDelimitedString('3', '~') FnRoles 
	WHERE EA.in_rolecode = FnRoles.vc_Val
	AND ((FnRoles.vc_Val IN (3, 4, 6, 85) AND EM.PLAN1 = EA.vc_plan) OR (FnRoles.vc_Val NOT IN (3, 4, 6, 85) AND EM.PLAN1 LIKE EA.vc_plan + '%'))
)` , function (err, recordset) {

       if (err) console.log(err);
       else{

       // send records as a response
       console.log(recordset);
}
res.json(recordset.recordsets[0][0].EmpCode)
   });

});

      router.get('/getCsoData/:empId',(req, res)=>{
   request.query( `SELECT EA.ch_empcode AS EmpCode

FROM ZEMP_MAST_WEB_AL EM WITH(FORCESEEK INDEX (noncidx_ZEMP_MAST_WEB_AL_EMPNO_OU_PA_PSA_VDSK1_BA_PLAN1))
INNER JOIN ecc_authorization EA --WITH(INDEX (noncidx_ecc_authorization_rolecode_ou_pa_psa_orgkey_ba_plan_active)) 
ON EM.OU LIKE EA.vc_ou + '%' AND EM.PA LIKE EA.vc_pa + '%' AND EM.PSA LIKE EA.vc_psa + '%' 
AND EM.VDSK1 LIKE EA.ch_orgkey + '%' AND EM.BA LIKE EA.vc_ba + '%'
--AND EM.PLAN1 LIKE EA.vc_plan + '%' 
AND EA.bit_active = 1 AND EM.EMPNO = '`+req.params.empId+`'
AND EXISTS 
(
	SELECT 'X' FROM dbo.fn_GetTableFromDelimitedString('9', '~') FnRoles 
	WHERE EA.in_rolecode = FnRoles.vc_Val
	AND ((FnRoles.vc_Val IN (3, 4, 6, 85) AND EM.PLAN1 = EA.vc_plan) OR (FnRoles.vc_Val NOT IN (3, 4, 6, 85) AND EM.PLAN1 LIKE EA.vc_plan + '%'))
)` , function (err, recordset) {

       if (err) console.log(err);
       else{

       // send records as a response
       console.log(recordset);
}
res.json(recordset.recordsets[0][0].EmpCode)
   });

});

      router.get('/verifySupervisor/:empId',(req, res)=>{
   request.query( `SELECT * FROM ecc_authorization WHERE in_rolecode IN(15) AND  bit_active = 1 AND ch_empcode ='`+req.params.empId+`'` , function (err, recordset) {

       if (err) console.log(err);
       else{

       // send records as a response
       res.json(recordset.recordsets[0][0])
}

   });

});

            router.get('/verifyHr/:empId',(req, res)=>{
   request.query( `SELECT * FROM ecc_authorization WHERE in_rolecode IN(3) AND  bit_active = 1 AND ch_empcode ='`+req.params.empId+`'` , function (err, recordset) {

       if (err) console.log(err);
       else{

       // send records as a response
       res.json(recordset.recordsets[0][0])
}

   });

});

                  router.get('/verifyCso/:empId',(req, res)=>{
   request.query( `SELECT * FROM ecc_authorization WHERE in_rolecode IN(9) AND  bit_active = 1 AND ch_empcode ='`+req.params.empId+`'` , function (err, recordset) {

       if (err) console.log(err);
       else{

       // send records as a response
       res.json(recordset.recordsets[0][0])
}

   });

});
})

module.exports = router;*/