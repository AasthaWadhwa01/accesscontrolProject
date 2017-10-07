let express = require('express');
let router = express();
let mongoose = require('mongoose');
let sql = require("mssql");
let config = require('../config/config');

//configuartion file for connection
let sqlDb = "";
module.exports = {
    //connection to database
    connectToSQL: function(callback) {
        sql.connect(config.config, function(err) {
            sqlDb = new sql.Request();
            return callback(err);
        });
    },
    getSqlDb: function() {
        return sqlDb;
    }
};