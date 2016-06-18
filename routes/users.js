var express = require('express');
var router = express.Router();
var models = require('../models/index');


router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// get all users
router.get('/users', function(req, res) {
  models.User.findAll({}).then(function(users) {
    res.json(users);
  });
});

// get single user
router.get('/user/:id', function(req, res) {
  models.User.find({
    where: {
      id: req.params.id
    }
  }).then(function(user) {
    res.json(user);
  });
});

// add new user
router.post('/users', function(req, res) {
  models.User.create({
    username: req.body.username,
    name: req.body.name,
    password: req.body.password
  }).then(function(user) {
    res.json(user);
  });
});

// update single user
router.put('/user/:id', function(req, res) {
  models.User.find({
    where: {
      id: req.params.id
    }
  }).then(function(user) {
    if(user){
      user.updateAttributes({
        username: req.body.username,
        name: req.body.name,
        password: req.body.password
      }).then(function(user) {
        res.send(user);
      });
    }
  });
});

// delete a single user
router.delete('/user/:id', function(req, res) {
  models.User.destroy({
    where: {
      id: req.params.id
    }
  }).then(function(user) {
    res.json(user);
  });
});

module.exports = router;
