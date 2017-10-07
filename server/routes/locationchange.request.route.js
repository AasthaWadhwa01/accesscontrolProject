let express = require('express');
let router = express.Router();
let bodyParser = require('body-parser');

//requiring the model classes
let locationChange = require('../models/locationchange.request');
let config = require('../config/config');
let sqlCon = require('./sqlconnection');

// query to the sql database and get the records
router.get('/getdata/:empId', (req, res) => {
    var request = sqlCon.getSqlDb();
    request.query(config.query + req.params.empId + `'`, function(err, recordset) {
        res.json(recordset.recordsets)
    });
});

//get location change data
router.get('/locationchangedetails', function(req, res, next) {
    locationChange.find({}, function(err, data) {
        res.json(data);
    });
});

//api for Location change
router.post('/newlocation', function(req, res, next) {
    locationChange.create(req.body).then(function(data) {
        res.send(data)
    })
})

// exporting the router
module.exports = router;