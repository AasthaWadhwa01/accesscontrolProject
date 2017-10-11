//damageCard model class
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//damageCard form schema
var damageSchema = new Schema({
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

//exporting the damageCard file
var data = mongoose.model('damage', damageSchema)
module.exports = data;