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
			$scope.movie.acteurs = res.data.cast.slice(0, 7);
			$scope.movie.acteurs.forEach(function(key, value) {
				console.log(key);

				var getDetailedActor = 'http://api.themoviedb.org/3/person/' + key.id + '?api_key=' + API_KEY;
				$http.get(getDetailedActor).then(function(res) {
					key.biographie = res.data.biography;
					console.log($scope.movie);
				})
			})
		})

		//$scope.thing = ThingService.recupererFilmBidon();



	});
