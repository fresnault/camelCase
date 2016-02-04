'use strict';

/**
 * @ngdoc function
 * @name camelCaseApp.controller:vuePolygonInteractiveCtrl
 * @description
 * # vuePolygonInteractiveCtrl
 * Controller of the camelCaseApp
 */
angular.module('camelCaseApp')
	.controller('vueFilmCtrl', function($http, $scope, ThingService, API_KEY, $routeParams) {

		var idMovie = $routeParams.id;
		$scope.movie = {};

		var getMovie = 'http://api.themoviedb.org/3/movie/' + idMovie + '?api_key=' + API_KEY;
		var getActors = 'http://api.themoviedb.org/3/movie/' + idMovie + '/credits?api_key=' + API_KEY;

		$http.get(getMovie).then(function(res) {
			$scope.movie = res.data;
			console.log($scope.movie);
		})

		$http.get(getActors).then(function(res) {
			$scope.movie.acteurs = res.data.cast;
			console.log($scope.movie.acteurs);
		})

		//$scope.thing = ThingService.recupererFilmBidon();



	});
