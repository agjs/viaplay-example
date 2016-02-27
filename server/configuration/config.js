'use strict';

var path = require('path');
var rootPath = path.resolve('../');

var cfg = {

	root: rootPath,
	clientPath: path.resolve(rootPath + '/client'),
	express_port: process.env.PORT || 9000,
}


module.exports = cfg;