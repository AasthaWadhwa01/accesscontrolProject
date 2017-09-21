let express = require('express');
let router = express.Router();
let bodyParser = require('body-parser')

let mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/centralAccess');
let db = mongoose.connection;

let Data = require('../models/requester');

router.use(bodyParser.json())
router.use(bodyParser.urlencoded({
    extended: true
}))

data={ category:"Employee",
    accessType:"New access",
    employeeID:"1234",
    employeeType:"Permanent",
    employeeName:"Rohit",
   dateOfJoining:"03/07/2017",
    designation:"trainee",
    project:"stackroute",
    department:"training",
   status:"Permanent",
    dateOfExpiry:"18/12/2017",
    existingProject:"Stack",
    newProject:"Sita",
    dateRequest:""
    }

    Data.insert(data, function(err, res){
	if(err)
		throw err;
	else
		console.log(res);
});