//lost card model class
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//lost card form schema   
var lostCardSchema = new Schema({
    empId: Number,
    name: String,
    doj: String,
    project: String,
    ou: String,
    date: {
        type: String,
    },
    comment: {
        type: String
    },
    prev: String,
    current: String
});

var data = mongoose.model('lost', lostCardSchema)
module.exports = data;