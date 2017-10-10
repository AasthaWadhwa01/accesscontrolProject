let express = require('express');
let router = express.Router();

let lost = require('../models/lostCard');

//connection from mongo db database
let mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/centralAccess');
let db = mongoose.connection;

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

//get employee by id
router.get('/findemployeebyid/:id', function(req, res, next) {
    lost.findOne({ employeeID: req.params.id }, function(err, data) {
        res.json(data);
    });
});

//update form by employee id
router.put('/update/:employeeID', (req, res) => {
    lost.update({
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

module.exports = router;