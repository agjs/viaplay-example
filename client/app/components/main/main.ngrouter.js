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