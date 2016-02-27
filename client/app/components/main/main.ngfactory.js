(function() {
	'use strict';

	module.exports = factory;

	function factory($http) {

		return {
			movies: function() {
				return $http.get('/api/movies')
					.then(function(movies) {
						return movies.data;
					});
			}
		}

		factory.$inject = ['$http'];

	}


})();