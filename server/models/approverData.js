//approverData model class
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//employee schema
var approverSchema = new Schema({
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

//exporting the approverData file
var data = mongoose.model('approver', approverSchema)
module.exports = data;