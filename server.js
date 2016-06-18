'use strict';

var express = require('express'),
    bodyParser = require('body-parser'),
    morgan = require('morgan'),
    app = express();

var bcrypt = require('bcrypt');
const saltRounds = 10;
const myPlaintextPassword = 's0/\/\P4$$w0rD';
const someOtherPlaintextPassword = 'bacon_tastes_good';

/*
 keep this for now till ready to save in DB;
 bcrypt.genSalt(saltRounds, function(err, salt) {
 bcrypt.hash(myPlaintextPassword, salt, function(err, hash) {

 });

 // Load hash from your password DB.
 bcrypt.compare(myPlaintextPassword, hash, function(err, res) {
 // res == true
 });
 bcrypt.compare(someOtherPlaintextPassword, hash, function(err, res) {
 // res == false
 });
 });*/

app.get('/', function (req, res) {
    res.send('Hello World!');
});

module.exports = app;