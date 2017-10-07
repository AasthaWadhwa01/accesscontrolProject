  //third party model class
  var mongoose = require('mongoose');
  var Schema = mongoose.Schema;

  //third party form schema
  var thirdPartySchema = new Schema({
      category: {
          type: String
      },
      location: {
          type: String
      },
      employeeName: {
          type: String
      },
      employeeId: {
          type: String
      },
      visitorName: {
          type: String
      },
      visitingPurpose: {
          type: String
      },
      duration: {
          type: String
      },
      dateOfVisiting: {
          type: String
      },
      signature: {
          type: String
      },
      applicationDate: {
          type: String
      }
  });

  //exporting the thirdparty.request file
  var data = mongoose.model('thirdpartydata', thirdPartySchema)
  module.exports = data;