//approver data model class
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//approver schema
var employeeSchema = new Schema({
    serial: {
        type: String,
    },
    project: {
        type: String
    },
    phase: {
        type: String
    },
    access: {
        type: String
    },
    proCat: {
        type: String
    },
    appAuth: {
        type: String
    },
    appEmp: {
        type: String
    }
});

//exporting the approverdata file
var data = mongoose.model('approverdata', employeeSchema)
module.exports = data;