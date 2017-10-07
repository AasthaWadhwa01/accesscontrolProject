let express = require('express');
let router = express.Router();
let bodyParser = require('body-parser');

//requiring the model classes
let lostCard = require('../models/lostcard.request');
let config = require('../config/config');
let sqlCon = require('./sqlconnection');

// query to the sql database and get the records
router.get('/getdata/:empId', (req, res) => {
    var request = sqlCon.getSqlDb();
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