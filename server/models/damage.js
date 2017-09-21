
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
   
          var employeeSchema = new Schema({
          empId:Number,
          empType: String,
          name: String,
          doj: String,
          designation: String,
          project: String,
          ou: String, 
            date:{
           type:String,
           
         },
            comments: {
            type: String
           },
           prev: String,
           current: String
         }); 

      var data = mongoose.model('damage', employeeSchema)
       module.exports = data;