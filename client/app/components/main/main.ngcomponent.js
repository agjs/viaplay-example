(function() {

	'use strict';

	angular.module('mtgx')
		.controller('mainController', require('./main.ngcontroller'))
		.factory('mainFactory', require('./main.ngfactory'))
		.config(require('./main.ngrouter'));

})();

