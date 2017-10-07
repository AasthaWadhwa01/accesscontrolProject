let express = require('express');
let router = express.Router();
let bodyParser = require('body-parser');

//requiring the model classes
let employee = require('../models/employeedata');
let config = require('../config/config');
let sqlCon = require('./sqlconnection');

// query to the sql database and get the records
router.get('/getdata/:empId', (req, res) => {
    var request = sqlCon.getSqlDb();
    request.query(config.query + req.params.empId + `'`, function(err, recordset) {
        res.json(recordset.recordsets)
    });
});

//retrieve employee details
router.get('/employeedetails', function(req, res, next) {
    employee.find({}, function(err, data) {
        res.json(data);
    });
});

//get employee details by id
router.get('/employeeiddetails/:id', function(req, res, next) {
    employee.findOne({ employeeID: req.params.id }, function(err, data) {
        res.json(data);
    });
});

//update form by employee id
router.put('/editemployee/:employeeID', (req, res) => {
    employee.update({
            employeeID: req.params.employeeID
        }, {
            $set: {
                zone: req.body.zone,
                accessType: req.body.accessType,
                prev: req.body.prev,
                current: req.body.current,
                issuedBy: req.body.issued,
                issueDate: req.body.datepickerModel,
                cardno: req.body.accessCard
            }
        }, { upsert: true },
        (err, empp) => {
            if (err)
                throw err
            else {
                res.json(empp)
            }
        })
})

//post employee details in the form
router.post('/newemployee', function(req, res, next) {
    employee.create(req.body).then(function(data) {
        res.send(data)
    })
})

/*//show the employee data
router.get('/show', function(req, res, next) {
    employee.find({}, function(err, data) {
        res.json(data);
    });
})*/

// exporting the router
module.exports = router;