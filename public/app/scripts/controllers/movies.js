'use strict';

/**
 * @ngdoc function
 * @name camelCaseApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the camelCaseApp
 */
angular.module('camelCaseApp')
	.controller('MoviesCtrl', function($scope, $http, $sce) {

		$scope.conf = {};


		var api_key = '16f6aa27277494afd13f5497d6ceba9e';

		$scope.resultat = {};

		$http.get('https://api.themoviedb.org/3/configuration?api_key=' + api_key).then(function(res) {
			$scope.conf = res.data;



		});


		$scope.search = function() {

			var url = 'http://api.themoviedb.org/3/search/movie?api_key=' + api_key + '&query='+ $scope.searchQuery ;

			$http.get(url ).then(function(res) {
				var movie = res.data;

				console.log(movie);

			})
		}


	});