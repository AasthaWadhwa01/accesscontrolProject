let express = require('express');
let router = express.Router();
let logger = require('../services/app.logger');
let con = require('../config/config');
let httpstatus = require('../config/httpmsg');
//connection from mongo db database
let mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/centralAccess');
let db = mongoose.connection;

let location = require('../models/locationChange');
//get location change data
router.get('/findlocation', function(req, res, next) {
    try {
        location.find({}, function(err, data) {
            if (err) {
                res.send({ success: false, message: err.toString(), data: err.toString() });
            } else
            if (!data) {
                return res.status(httpstatus.nocontent.code).send({ success: false, message: 'employee data not found', data: err });
            } else {
                //maintaining logger if database hits location change details and they are fetched
                logger.info(con.messages.location_get);
                return res.status(httpstatus.success.code).json({ success: true, message: con.messages.location_get, data: data });
            }
        });
    } catch (error) {
        //maintaining logger if database donot hit locationchange details
        logger.error(con.messages.location_get_error)
        return res.status(httpstatus.internalerror.code).json({ success: false, message: httpstatus.internalerror.msg, data: error.toString() });
    }
});

//api for Location change
router.post('/locationInsert', function(req, res, next) {
    try {

        location.create(req.body).then(function(data, err) {
                if (err) {
                    return res.send({ success: false, message: err.toString(), data: err.toString() });
                } else
                if (!data) {
                    return res.status(httpstatus.nocontent.code).send({ success: false, message: 'employee data coouldnot be filled' });
                } else {
                    //inserting details of location change and they are fetched
                    logger.info(con.messages.location_post);
                    return res.status(httpstatus.success.code).json({ success: true, message: con.messages.location_post, data: data });
                }
            }
            // ,error=>{
            //  return  res.send({success:false,message:err.toString(),data:err.toString()})
            // }
        )
    } catch (error) {
        //maintaining logger if database donot hit locationchange details
        logger.error(con.messages.location_post_error)
        return res.status(httpstatus.internalerror.code).json({ success: false, message: httpstatus.internalerror.msg, data: error.toString() });
    }
})

module.exports = router;