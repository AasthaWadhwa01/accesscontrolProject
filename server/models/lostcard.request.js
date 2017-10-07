//lost card model class
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//lost card form schema   
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

//exporting the lostcard.request file
var data = mongoose.model('lostcarddata', employeeSchema)
module.exports = data;