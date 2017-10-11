  //thirdParty model class
  var mongoose = require('mongoose');
  var Schema = mongoose.Schema;

  //thirdParty form schema
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

  //exporting the thirdParty file
  var data = mongoose.model('thirdParty', thirdPartySchema)
  module.exports = data;