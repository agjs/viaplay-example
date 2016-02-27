'use strict';

module.exports = controller;

function controller($scope, $sce, mainFactory) {
	mainFactory.movies().then(function(movie) {
		$scope.details = movie.details;
		$scope.trailers = movie.trailers;
		$scope.traileraddict_player = $sce.trustAsHtml(movie.trailers[0].embed);

	});

}

controller.$inject = ['$scope', '$sce', 'mainFactory'];