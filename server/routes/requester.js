let express = require('express');
let router = express.Router();

let logger = require('../services/app.logger');
let con = require('../config/config');
let httpstatus = require('../config/httpmsg');
let requester = require('../models/requester'); //requiring the model classes

//get method for new requester access record
router.get('/findemployee', function(req, res, next) {
    try {
        requester.find({}, function(err, data) {
            if (err) {
                return res.send({ success: false, message: err.toString(), data: err.toString() });
            } else
            if (!data) {
                return res.status(httpstatus.nocontent.code).send({ success: false, message: 'employee data not found', data: 'employee data not found' });
            } else {
                //maintaining logger if database hits new access details and they are fetched
                logger.info(con.messages.requester_get);
                return res.status(httpstatus.success.code).json({ success: true, message: con.messages.requester_get, data: data })
            }
        });
    } catch (error) {
        //maintaining logger if database donot hit requester details
        logger.error(con.messages.requester_get_error)
        return res.status(httpstatus.internalerror.code).json({ success: false, message: httpstatus.internalerror.msg, data: error.toString() });
    }
});

//post method for new requester access record
router.get('/findemployeebyid/:id', function(req, res, next) {
    try {
        requester.findOne({ employeeID: req.params.id }, function(err, data) {
            if (err) {
                return res.send({ success: false, message: err.toString(), data: err.toString() });
            } else
            if (!data) {
                return res.status(httpstatus.nocontent.code).send({ success: false, message: 'employee data by id not found', data: 'employee data by id not found' });
            } else {
                //maintaining logger if database hits new access details of particular employee and they are fetched
                logger.info(con.messages.requesterID_get);
                return res.status(httpstatus.success.code).json({ success: true, message: con.messages.requesterID_ge, data: data })
            }
        });
    } catch (error) {
        //maintaining logger if database donot hit requesterID details
        logger.error(con.messages.requester_getID_error)
        return res.status(httpstatus.internalerror.code).json({ success: false, message: httpstatus.internalerror.msg, data: error.toString() });
    }
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

//generate report of employees with closed status(approved or rejcted)
router.get('/employeereportclosed', function(req, res, next) {
   requester.find({current: "Closed"}, function(err, data) {
       res.json(data);
   });
});

//generate report of employees with status at cso
router.get('/employeereportpending', function(req, res, next) {
   requester.find({current: "Cso"}, function(err, data) {
       res.json(data);
   });
});

//post employee details in the form
router.post('/insert', function(req, res, next) {
    try {
        requester.create(req.body).then(function(data, err) {
            if (err) {
                return res.send({ success: false, message: err.toString(), data: err.toString() });
            } else
            if (!data) {
                return res.status(httpstatus.nocontent.code).send({ success: false, message: 'employee data couldnot be found', data: 'employee data couldnot be found' });
            } else {
                //maintaining logger if database inserts new access card details
                logger.info(con.messages.requester_post);
                return res.status(httpstatus.success.code).json({ success: true, message: con.messages.requester_post, data: data });
            }

        })
    } catch (error) {
        //maintaining logger if database donot insert requester details
        logger.error(con.messages.requester_post_error)
        return res.status(httpstatus.internalerror.code).json({ success: false, message: httpstatus.internalerror.msg, data: error.toString() });
    }
})

//show the employee data
router.get('/show', function(req, res, next) {
    try {
        requester.find({}, function(err, data) {
            if (err) {
                return res.send({ success: false, message: err.toString(), data: err.toString() });
            } else
            if (!data) {
                return res.status(httpstatus.nocontent.code).send({ success: false, message: 'employee data not found', data: 'employee data not found' });
            } else {
                //maintaining logger if database hits new access card details and they are fetched
                logger.info(con.messages.show_employee);
                return res.status(httpstatus.success.code).json({ success: true, message: con.messages.show_employee, data: data })
            }
        });
    } catch (error) {
        //maintaining logger if database donot show requester details
        logger.error(con.messages.requester_show_error)
        return res.status(httpstatus.internalerror.code).json({ success: false, message: httpstatus.internalerror.msg, data: error.toString() });
    }
})

module.exports = router;