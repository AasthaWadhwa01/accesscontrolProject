let express = require('express');
let router = express.Router();
let bodyParser = require('body-parser');
let sql = require("mssql");

//requiring the model classes
let lostCard = require('../models/lostcard.request');
let config = require('../config/config');

// query to the database and get the records
router.get('/getdata/:empId', (req, res) => {
    var request = new sql.Request();
    request.query(config.query + req.params.empId + `'`, function(err, recordset) {
        res.json(recordset.recordsets)
    });
});

//find lost data card information
router.get('/lostcarddetails', function(req, res, next) {
    lostCard.find({}, function(err, data) {
        res.json(data);
    });
});

//insert lost card information
router.post('/newlostcard', function(req, res, next) {
    lostCard.create(req.body).then(function(data) {
        res.send(data);
    })
})

// exporting the router
module.exports = router;