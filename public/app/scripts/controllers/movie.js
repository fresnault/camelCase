'use strict';

/**
 * @ngdoc function
 * @name camelCaseApp.controller:vuePolygonInteractiveCtrl
 * @description
 * # vuePolygonInteractiveCtrl
 * Controller of the camelCaseApp
 */
angular.module('camelCaseApp')

	.directive('backImg', function(){
	    return function(scope, element, attrs){
	        attrs.$observe('backImg', function(value) {

	        var base_url = 'https://image.tmdb.org/t/p/w1280'

            element.css({
                'background-image': 'url(' + base_url+value +')',
            });
        });
	    };
	})

	.controller('movieCtrl', function($http, $scope, ThingService, API_KEY, $routeParams,$location) {

		var idMovie = $routeParams.id;
		$scope.movie = {};

		var getMovie = 'http://api.themoviedb.org/3/movie/' + idMovie + '?api_key=' + API_KEY;
		var getActors = 'http://api.themoviedb.org/3/movie/' + idMovie + '/credits?api_key=' + API_KEY;


		$http.get(getMovie).then(function(res) {
			$scope.movie = res.data;

			var post = {
				type : 'movies',
				id : $scope.movie.id,
				name : $scope.movie.title
			};

			$http.post('/api/stats', post);
		})

		$http.get(getActors).then(function(res) {
			var arr = res.data.cast.slice(0, 7);
			$scope.movie.acteurs = shuffle(arr);
			$scope.getActors();
		})


		$scope.selectedActor = function(selected) {
			if(selected  && selected.id)
				$location.url('actor/'+selected.id);
		}

		$scope.moveToHomePage = function() {
			$location.url('/');
		}

		$scope.getActors = function() {
			$scope.movie.acteurs.forEach(function(key, value) {
				var getDetailedActor = 'http://api.themoviedb.org/3/person/' + key.id + '?api_key=' + API_KEY;
				$http.get(getDetailedActor).then(function(res) {
					key.info = res.data;
				})
			})

			afficherEffet(2,2);
		}

		//$scope.thing = ThingService.recupererFilmBidon();



	});
