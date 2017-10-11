let express = require('express');
let router = express.Router();
let logger = require('../services/app.logger');
let damage = require('../models/damage');
let con = require('../config/config');
let httpstatus = require('../config/httpmsg');
//connection from mongo db database
let mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/centralAccess');
let db = mongoose.connection;

//get damage data
router.get('/finddamage', function(req, res, next) {
    try {
        damage.find({}, function(err, data) {
            if (err) {
                res.status().send({ success: false, message: '', data: err.toString() });
            } else
            if (!data) {
                return res.status(httpstatus.nocontent.code).send({ success: false, message: 'employee data not found', data: data });
            } else {
                //maintaining logger if database hits damage card details and they are fetched
                logger.info(con.messages.approver_get);
                res.status(httpstatus.success.code).json({ success: true, message: con.messages.approver_get, data: data });
            }
        });
    } catch (error) {
        //maintaining logger if database donot insert approver details
        logger.error(con.messages.damage_get_error)
        return res.status(httpstatus.internalerror.code).json({ success: false, message: httpstatus.internalerror.msg, data: error.toString() });
    }
});

//api for damged card
router.post('/damageInsert', function(req, res, next) {
    try {
        damage.create(req.body).then(function(data, err) {
            if (err) {
                return res.send({ success: false, message: '' });
            } else
            if (!data) {
                return res.status(httpstatus.nocontent.code).json({ success: false, message: 'approver data not found' });
            } else {
                //maintaining logger if database hits damage card details are fetched
                logger.info(con.messages.approver_post);
                return res.status(httpstatus.success.code).send({ success: true, message: con.messages.approver_post, data: data })
            }
        })
    } catch (error) {
        //maintaining logger if database donot insert approver details
        logger.error(con.messages.damage_post_error)
        return res.status(httpstatus.internalerror.code).json({ success: false, message: httpstatus.internalerror.msg, data: error.toString() });
    }
})

module.exports = router;