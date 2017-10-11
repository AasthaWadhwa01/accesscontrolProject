let express = require('express');
let router = express.Router();
<<<<<<< HEAD
let logger = require('../services/app.logger');
=======
let mongoose = require('mongoose')

>>>>>>> 9f61436371e8a418d0047251932635606e40195b
let thirdParty = require('../models/thirdParty');
let con = require('../config/config');
let httpstatus = require('../config/httpmsg');

//connection from mongo db database
mongoose.connect('mongodb://localhost:27017/centralAccess');
let db = mongoose.connection;

//get third party data
router.get('/findthird', function(req, res, next) {
    try {
        thirdParty.find({}, function(err, data) {
            if (err) {
                return res.send({ success: false, message: err.toString(), data: err.toString() });
            } else
            if (!data) {
                return res.status(httpstatus.nocontent.code).send({ success: false, message: 'thirdparty data not found', data: 'thirdparty data not found' });
            } else {
                //maintaining logger if database hits third party details and they are fetched
                logger.info(con.messages.thirdparty_get);
                return res.status(httpstatus.success.code).json({ success: true, message: con.messages.thirdparty_get, data: data })
            }
        });
    } catch (error) {
        //maintaining logger if database donot hit locationchange details
        logger.error(con.messages.thirdparty_get_error)
        return res.status(httpstatus.internalerror.code).json({ success: false, message: con.messages.msg, data: error.toString() });
    }
});

//api for third party
router.post('/thirdInsert', function(req, res, next) {
    try {
        thirdParty.create(req.body).then(function(data, err) {
            if (err) {
                return res.send({ success: false, message: err.toString(), data: err.toString() });
            } else
            if (!data) {
                return res.status(httpstatus.nocontent.code).send({ success: false, message: 'approver data not found' });
            } else {
                //maintaining logger if database hits location change details and they are inserted
                logger.info(con.messages.thirdparty_post);
                return res.status(httpstatus.success.code).json({ success: true, message: con.messages.thirdparty_post, data: data })
            }
        })
    } catch (error) {
        //maintaining logger if database donot insert third party details
        logger.error(con.messages.thirdparty_post_error)
        return res.status(httpstatus.internalerror.code).json({ success: false, message: con.messages.msg, data: error.toString() });
    }
})

module.exports = router;