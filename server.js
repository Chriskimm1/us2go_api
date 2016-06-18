var express = require('express');
var logger = require('morgan');
var bodyParser = require('body-parser');


var routes = require('./routes/users.js');

// *** express instance *** //
var app = express();

// *** config middleware *** //
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// *** main routes *** //
app.use('/', routes);

module.exports = app;
