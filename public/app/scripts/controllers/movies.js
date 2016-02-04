'use strict';

/**
 * @ngdoc function
 * @name camelCaseApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the camelCaseApp
 */
angular.module('camelCaseApp')
	.controller('MoviesCtrl', function($scope, $http, $sce, $location, API_KEY) {

		$scope.conf = {};

		$scope.resultat = {};

		$http.get('https://api.themoviedb.org/3/configuration?api_key=' + API_KEY).then(function(res) {
			$scope.conf = res.data;
			console.log($scope.conf);
		});

		$scope.addPathToUrl = function(data) {
			angular.forEach(data.results, function(movie, value) {
				movie.poster_path = 'https://image.tmdb.org/t/p/w92/' + movie.poster_path;
				movie.vote_average = '(' + movie.vote_average + '/10)';
				movie.year = movie.release_date.substring(0, 4);
			})
			return data;
		}

		$scope.selectedMovie = function(selected) {
			console.log(selected.originalObject);
			$location.url('vueFilm/'+selected.originalObject.id);
		}

		$scope.search = function() {

			var url = 'http://api.themoviedb.org/3/search/movie?api_key=' + api_key + '&query='+ $scope.searchQuery ;

			$http.get(url ).then(function(res) {
				var movie = res.data;

				console.log(movie);

			})
		}


	});
