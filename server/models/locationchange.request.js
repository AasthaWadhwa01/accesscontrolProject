//location change model class
var express = require('express')
var mongoose = require('mongoose')
var Schema = mongoose.Schema

//location change form schema
var locationChangeSchema = new Schema({
    category: String,
    accessType: String,
    empId: String,
    empType: String,
    empName: String,
    dateOfJoining: String,
    designation: String,
    project: String,
    ou: String,
    status: String,
    dateOfExpiry: String,
    projectTransfer: String,
    existingLocation: String,
    newLocation: String,
    signature: String,
    date: String
})

// exporting the locationchange.request file
var location = mongoose.model('locationchangecarddata', locationChangeSchema)
module.exports = location