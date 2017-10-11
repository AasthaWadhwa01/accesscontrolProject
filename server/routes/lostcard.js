let express = require('express');
let router = express.Router();
let mongoose = require('mongoose')

let logger = require('../services/app.logger');
let lost = require('../models/lostCard'); //requiring the model classes
let con = require('../config/config');
let httpstatus = require('../config/httpmsg');

//get method for new lost card record
router.get('/findlost', function(req, res, next) {
    try {
        lost.find({}, function(err, data) {
            if (err) {
                return res.send({ success: false, message: err.toString(), data: err.toString() });
            } else
            if (!data) {
                return res.status(httpstatus.nocontent.code).send({ success: false, message: 'employee data not found' });
            } else {
                //maintaining logger if database hits lost card details and they are fetched
                logger.info(con.messages.lostcard_get);
                return res.status(httpstatus.success.code).json({ success: true, message: con.messages.lostcard_get, data: data })
            }
        });
    } catch (error) {
        //maintaining logger if database donot hit locationchange details
        logger.error(con.messages.lostcard_get_error)
        return res.status(httpstatus.internalerror.code).json({ success: false, message: httpstatus.internalerror.msg, data: error.toString() });
    }
});

//post method for new lost card record
router.post('/lostInsert', function(req, res, next) {
    try {
        lost.create(req.body).then(function(data, err) {
            if (err) {
                return res.send({ success: false, message: err.toString(), data: err.toString() });
            } else
            if (!data) {
                return res.status(httpstatus.nocontent.code).send({ success: false, message: 'employee data not found' });
            } else {
                //maintaining logger if database hits lost card details are fetched
                logger.info(con.messages.lostcard_post);
                return res.status(httpstatus.success.code).json({ success: true, message: con.messages.lostcard_post, data: data })
            }
        })
    } catch (error) {
        //maintaining logger if database donot hit locationchange details
        logger.error(con.messages.lostcard_post_error)
        return res.status(httpstatus.internalerror.code).json({ success: false, message: httpstatus.internalerror.msg, data: error.toString() });
    }
})

module.exports = router;