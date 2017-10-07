let express = require('express');
let router = express.Router();
let bodyParser = require('body-parser');

//requiring the model classes
let damageCard = require('../models/damagecard.request');
let config = require('../config/config');
let sqlCon = require('./sqlconnection');

// query to the sql database and get the records
router.get('/getdata/:empId', (req, res) => {
    var request = sqlCon.getSqlDb();
    request.query(config.query + req.params.empId + `'`, function(err, recordset) {
        res.json(recordset.recordsets)
    });
});


//get details of damage card 
router.get('/damagecarddetails', function(req, res, next) {
    damageCard.find({}, function(err, data) {
        res.json(data);
    });
});

//insert details of damaged card
router.post('/newdamagecard', function(req, res, next) {
    damageCard.create(req.body).then(function(data) {
        res.send(data);
    })
})

// exporting the router
module.exports = router;