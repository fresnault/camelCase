'use strict';

/**
 * @ngdoc function
 * @name camelCaseApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the camelCaseApp
 */
angular.module('camelCaseApp')
	.controller('MoviesCtrl', function($scope, $http, $sce, $location, API_KEY, $filter) {

		$scope.conf = {};

		$scope.resultat = {};

		$http.get('https://api.themoviedb.org/3/configuration?api_key=' + API_KEY).then(function(res) {
			$scope.conf = res.data;
			console.log($scope.conf);
		});

		$scope.addPathToUrl = function(data) {
			angular.forEach(data.results, function(movie, value) {
				if(movie.poster_path != null) {
					movie.poster_path = 'https://image.tmdb.org/t/p/w92/' + movie.poster_path;
				} else {
					movie.poster_path = '';
				}
				movie.vote = '(' + movie.vote_average + '/10)';
				movie.year = movie.release_date.substring(0, 4);

				if(movie.vote_average < 1) {
					var index = data.results.indexOf(movie);
					data.results.splice(index, 1);
				}
			})

			data.results = $filter('orderBy')(data.results, 'year');

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
