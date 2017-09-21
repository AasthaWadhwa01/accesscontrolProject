var mongoose = require('mongoose');
var Schema = mongoose.Schema;
 
         var employeeSchema = new Schema({
           serial:{
          type:String,
         
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
          }
          , appAuth: {
           type: String
          },
           appEmp: {
           type: String
          }
        });

     var data = mongoose.model('approver', employeeSchema)
      module.exports = data;
