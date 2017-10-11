let express = require('express');
let router = express.Router();
let mongoose = require('mongoose')

let logger = require('../services/app.logger');
let thirdParty = require('../models/thirdParty'); //requiring the model classes
let con = require('../config/config');
let httpstatus = require('../config/httpmsg');

//get method for new thirdParty access record
router.get('/findthird', function(req, res, next) {
    try {
        thirdParty.find({}, function(err, data) {
            if (err) {
                return res.send({ success: false, message: err.toString(), data: err.toString() });
            } else
            if (!data) {
                return res.status(httpstatus.nocontent.code).send({ success: false, message: 'thirdparty data not found', data: 'thirdparty data not found' });
            } else {
                //maintaining logger if database hits thirdParty details and they are fetched
                logger.info(con.messages.thirdparty_get);
                return res.status(httpstatus.success.code).json({ success: true, message: con.messages.thirdparty_get, data: data })
            }
        });
    } catch (error) {
        //maintaining logger if database donot hit thirdParty details
        logger.error(con.messages.thirdparty_get_error)
        return res.status(httpstatus.internalerror.code).json({ success: false, message: con.messages.msg, data: error.toString() });
    }
});

//post method for new thirdParty access record
router.post('/thirdInsert', function(req, res, next) {
    try {
        thirdParty.create(req.body).then(function(data, err) {
            if (err) {
                return res.send({ success: false, message: err.toString(), data: err.toString() });
            } else
            if (!data) {
                return res.status(httpstatus.nocontent.code).send({ success: false, message: 'approver data not found' });
            } else {
                //maintaining logger if database hits thirdParty details and they are inserted
                logger.info(con.messages.thirdparty_post);
                return res.status(httpstatus.success.code).json({ success: true, message: con.messages.thirdparty_post, data: data })
            }
        })
    } catch (error) {
        //maintaining logger if database donot insert thirdParty details
        logger.error(con.messages.thirdparty_post_error)
        return res.status(httpstatus.internalerror.code).json({ success: false, message: con.messages.msg, data: error.toString() });
    }
})

module.exports = router;