//damage card model class
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//damage card form schema
var employeeSchema = new Schema({
    empId: Number,
    empType: String,
    name: String,
    doj: String,
    designation: String,
    project: String,
    ou: String,
    date: String,
    comments: String,
    prev: String,
    current: String
});

//exporting the damagecard.request file
var data = mongoose.model('damagecarddata', employeeSchema)
module.exports = data;