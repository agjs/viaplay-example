(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function() {
angular.module('mtgx', ['ui.router']);
})();
},{}],2:[function(require,module,exports){
(function() {
	angular.module('mtgx')
		.config(function() {

		});
})();
},{}],3:[function(require,module,exports){
(function() {

	'use strict';

	angular.module('mtgx')
		.controller('mainController', require('./main.ngcontroller'))
		.factory('mainFactory', require('./main.ngfactory'))
		.config(require('./main.ngrouter'));

		


})();
},{"./main.ngcontroller":4,"./main.ngfactory":5,"./main.ngrouter":6}],4:[function(require,module,exports){
'use strict';

module.exports = controller;

function controller($scope, $sce, mainFactory) {
	mainFactory.movies().then(function(movie) {
		console.log(movie);
		$scope.details = movie.details;
		$scope.trailers = movie.trailers;
		$scope.traileraddict_player = $sce.trustAsHtml(movie.trailers[0].embed);

	});

}

controller.$inject = ['$scope', '$sce', 'mainFactory'];
},{}],5:[function(require,module,exports){
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
},{}],6:[function(require,module,exports){
(function() {
  'use strict';

  module.exports = function router($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/movies/movie");

    $stateProvider
      .state('main', {
        url: "/movies/movie",
        templateUrl: "app/components/main/main.ngview.html",
        controller: 'mainController'

      });
  }

})();
},{}]},{},[1,2,3]);
