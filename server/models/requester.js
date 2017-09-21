var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var employeeSchema = new Schema({
           employeeID: {
                type: String,
                //required: true,
                unique: true
            },

            employeeName: {
                type: String,
                //required: true
            },

            empType: {
                type: String
            },

            accessType: {
                type: String,
                //required: true
            },
            designation: {

                type: String,
                //required: true
            },
            dateOfJoining: {

                type: String,
                //required: true
            },

            dateOfExpiry: {

                type: String,
                //required: true
            },
            project: {

                type: String,
               // required: true
            },
            department: {

                type: String,
                //required: true
            },
            existingProject: {

                type: String,
               // required: true
            },
            newProject: {

                type: String,
               // required: true
            },

            requestDate: {

                type: String,
               // required: true
            }, 
            prev: {
                type: String
            },
            current: {
                type: String
            },
            zone: {
                type: Array
            },
            cardno: {
                type: String
            },
            issuedBy: {
                type: String
            },
            issueDate: {
                type: String
            }
          });

        var data = mongoose.model('employee', employeeSchema)
        module.exports = data;
