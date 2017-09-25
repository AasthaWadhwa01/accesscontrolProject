let express = require('express');
let router = express.Router();
let bodyParser = require('body-parser');
let sql = require("mssql");

//connection from mongo db database
let mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/centralAccess');
let db = mongoose.connection;

//requiring the model classes
let requester = require('../models/requester');
let thirdParty = require('../models/thirdParty');
let location = require('../models/locationChange');
let damage = require('../models/damage');
let lost = require('../models/lostCard');
let approver = require('../models/approverData');
let con = require('../config/config');

router.use(bodyParser.json())
router.use(bodyParser.urlencoded({
    extended: true
}))

//configuartion file for connection
sql.connect(con.config, function(err) {
    if (err) console.log(err);
    // create Request object
    var request = new sql.Request();
    // query to the database and get the records
    router.get('/sql/:empId', (req, res) => {
        request.query(con.query + req.params.empId + `'`, function(err, recordset) {
            if (err) console.log(err);
            else {
                // send records as a response
            }
            res.json(recordset.recordsets)
        });
    });
})

//get new access data
router.get('/findemployee', function(req, res, next) {
    requester.find({}, function(err, data) {
        res.json(data);
    });
});

//get employee by id
router.get('/findemployeebyid/:id', function(req, res, next) {
    requester.findOne({ employeeID: req.params.id }, function(err, data) {
        res.json(data);
    });
});

//update form by employee id
router.put('/update/:employeeID', (req, res) => {
    requester.update({
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
router.post('/insert', function(req, res, next) {
    requester.create(req.body).then(function(data) {
        res.send(data)
    })
})

//show the employee data
router.get('/show', function(req, res, next) {
    requester.find({}, function(err, data) {
        res.json(data);
    });
})

//Test Cases for third party
//get third party data
router.get('/findthird', function(req, res, next) {
    thirdParty.find({}, function(err, data) {
        res.json(data);
    });
});

//api for third party
router.post('/thirdInsert', function(req, res, next) {
    thirdParty.create(req.body).then(function(data) {
        res.send(data)
    })
})

//Test Cases for location change
//get location change data
router.get('/findlocation', function(req, res, next) {
    location.find({}, function(err, data) {
        res.json(data);
    });
});

//api for Location change
router.post('/locationInsert', function(req, res, next) {
    location.create(req.body).then(function(data) {
        res.send(data)
    })
})

//Test Cases for damaged card
//get damage data
router.get('/finddamage', function(req, res, next) {
    damage.find({}, function(err, data) {
        res.json(data);
    });
});

//api for damged card
router.post('/damageInsert', function(req, res, next) {
    damage.create(req.body).then(function(data) {
        res.send(data);
    })
})

//Test Cases for lost card
//get lost data
router.get('/findlost', function(req, res, next) {
    lost.find({}, function(err, data) {
        res.json(data);
    });
});

//api for lost card
router.post('/lostInsert', function(req, res, next) {
    lost.create(req.body).then(function(data) {
        res.send(data);
    })
})

//Test Cases for approver
//get Approver Data fom Database (Excel Wala)
router.get('/find', function(req, res, next) {
    approver.find({}, function(err, data) {
        res.json(data);
    });
});

//post employee details
router.post('/employee', function(req, res, next) {
    approver.create(req.body).then(function(data) {
        res.send(data)
    })
})

module.exports = router;