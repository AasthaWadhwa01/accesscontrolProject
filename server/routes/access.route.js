let express = require('express');
let route = express();
let mongoose = require('mongoose');

//all declaration of requiring files
let approverData = require('./approverdata.route');
let damageCard = require('./damagecard.request.route');
let locationChange = require('./locationchange.request.route');
let thirdParty = require('./thirdparty.request.route');
let lostCard = require('./lostcard.request.route');
let employeeData = require('./employeedata.route');

//connection from mongo db database
mongoose.connect('mongodb://localhost:27017/centralAccess');

//all routes to perform database operation
route.use('/approverdata', approverData);
route.use('/damagecard', damageCard);
route.use('/locationchange', locationChange);
route.use('/thirdparty', thirdParty);
route.use('/lostcard', lostCard);
route.use('/employee', employeeData);

module.exports = route;