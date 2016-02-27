'use strict';


var express = require('express');

var controller = require('./movie.controller');
var router = express.Router();

router.get('/', controller.movies);

module.exports = router;

