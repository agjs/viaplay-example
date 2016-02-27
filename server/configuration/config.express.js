/*jslint node: true */
'use strict';


var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var morgan = require('morgan');
var errorHandler = require('errorhandler');
var cfg = require('./config');

module.exports = function(app) {

	var env = app.get('env');


	app.use(bodyParser.urlencoded({
		extended: false
	}))
	app.use(bodyParser.json())

	app.set('json spaces', 4);
	app.disable('etag');
	app.disable('x-powered-by');

	app.engine('html', require('ejs').renderFile);
	app.set('view engine', 'html');

	app.set('appPath', cfg.clientPath);
	app.use(express.static(cfg.clientPath));


	app.set('appPath', path.join(config.root, 'client'));

	if ('production' === env) {

		// production related configuration
		// security, logging etc
		// 
	}

	if ('development' === env) {

		app.use(express.static(app.get('appPath')));
		app.use(morgan('dev'));
		app.use(errorHandler()); 

	}

	if ('development' === env || 'test' === env) {
		app.use(express.static(path.join(config.root, '.tmp')));
		app.use(express.static(app.get('appPath')));
		app.use(morgan('dev'));
		app.use(errorHandler()); // Error handler - has to be last
	}



};