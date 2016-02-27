'use strict';

var errors = require('../components/errors/index');


module.exports = function(app) {

	app.use('/api/movies', loadRouter('movie'));

	/************************************************************/

	app.route('/:url(api|auth|components|app|bower_components|assets)/*')
		.get(errors.pageNotFound);

	/************************************************************/


	app.route('/*')
		.get(function(req, res) {
			res.sendFile(app.get('appPath') + '/index.html');
		});

	/************************************************************/

};

function loadRouter(name) {
	return require('../api/' + name + '/' + name + '.router.js');
}