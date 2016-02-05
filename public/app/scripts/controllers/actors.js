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
                'background-position' : 'top',
                'background-size' : 'contains'
            });
        });
	    };
	})

	.controller('actorsCtrl', function($http, $scope, ThingService, API_KEY, $routeParams,$location) {


		var idPerson = $routeParams.id;
		$scope.actor = {};

		var getActor = 'http://api.themoviedb.org/3/person/' + idPerson + '?api_key=' + API_KEY;
		var getMovies = 'http://api.themoviedb.org/3/person/' + idPerson + '/credits?api_key=' + API_KEY;
		var getImages = 'http://api.themoviedb.org/3/person/' + idPerson + '/tagged_images?api_key=' + API_KEY;

		$http.get(getActor).then(function(res) {
			$scope.actor = res.data;

			var post = {
				type : 'actors',
				id : $scope.actor.id,
				name : $scope.actor.name
			};

			$http.post('/api/stats', post);
		})


		$http.get(getImages).then(function(res) {
			
			var img = shuffle(res.data.results)[0];

			$scope.backdrop_path = img.file_path;

			console.log($scope.backdrop_path);
		})

		$http.get(getMovies).then(function(res) {
			
			var arr = res.data.cast.slice(0, 7);
			$scope.actor.movies  = shuffle(arr);

			$scope.getMovies();
		})

		$scope.moveToHomePage = function() {
			$location.url('/');
		}

		$scope.selectedMovie = function(selected) {
			console.log(selected);
			if(selected  && selected.id)
				$location.url('movie/'+selected.id);
		}



		$scope.getMovies = function() {
			$scope.actor.movies.forEach(function(key, value) {
				var getDetailedMovie = 'http://api.themoviedb.org/3/movie/' + key.id + '?api_key=' + API_KEY;
				$http.get(getDetailedMovie).then(function(res) {
					key.info = res.data;
				})
			})

			afficherEffet(2,2);
		}






	});
