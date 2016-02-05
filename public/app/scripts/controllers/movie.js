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

	        	if(value == '') return;
	        	
	        var base_url = 'https://image.tmdb.org/t/p/w1280'

            element.css({
                'background-image': 'url(' + base_url+value +')',
                'background-position' : 'top',
                'background-size': 'cover',
            });
        });
	    };
	})

	.controller('DialogCtrl', ['$scope', 'stBlurredDialog', function($scope, stBlurredDialog, $sce, ngSanitize){
    $scope.dialogData = stBlurredDialog.getDialogData();

  $scope.movie = {src:$scope.dialogData.msg, title:""};
}])

	.controller('movieCtrl', function($http, $scope, ThingService, API_KEY, $routeParams,$location, $rootScope, stBlurredDialog) {

		if($rootScope.historic == null) {
			$rootScope.historic = new Array();
		}

		var idMovie = $routeParams.id;
		$scope.movie = {};

		var getMovie = 'http://api.themoviedb.org/3/movie/' + idMovie + '?api_key=' + API_KEY;
		var getImages = 'http://api.themoviedb.org/3/movie/' + idMovie + '/images?api_key=' + API_KEY;
		var getActors = 'http://api.themoviedb.org/3/movie/' + idMovie + '/credits?api_key=' + API_KEY;
		var getTrailers = 'http://api.themoviedb.org/3/movie/' + idMovie + '/videos?api_key=' + API_KEY;

		$scope.openModal = function(){
			console.log('open');
        // Call open() with a template and some data
        stBlurredDialog.open('app/views/modal.html', {msg: $scope.movie.trailers});
    }



		$http.get(getMovie).then(function(res) {
			$scope.movie = res.data;

			//creation de stats
			var post = {
				type : 'movies',
				id : $scope.movie.id,
				name : $scope.movie.title
			};
			//envoi au serveur
			$http.post('/api/stats', post);

			$http.get(getTrailers).then(function(res) {
				$scope.movie.trailers = 'http://www.youtube.com/embed/' + res.data.results[0].key + '?autoplay=1';
			});

			//ajout à l'historique
			$rootScope.historic.push({
				'image':'https://image.tmdb.org/t/p/w92' + $scope.movie.poster_path,
				'url':'movie/' + $scope.movie.id
			});

			$scope.historic = $rootScope.historic;
			//console.log($scope.historic);
		})

		$http.get(getActors).then(function(res) {
			var arr = res.data.cast.slice(0, 7);
			$scope.movie.acteurs = shuffle(arr);
			$scope.getActors();
		})

		$http.get(getImages).then(function(res) {
			//random backdrop
			var img = null;

			console.log(res.data.backdrops);

			if(res.data && res.data.backdrops.length > 0 ){
				img = shuffle(res.data.backdrops)[0].file_path;
			}else{
				img = $scope.movie.backdrop_path;
			}

			$scope.backdrop_path = img;
		})

		$scope.selectedActor = function(selected) {
			if(selected  && selected.id)
				$location.url('actor/'+selected.id);
		}

		$scope.moveToHomePage = function() {
			$location.url('/');
		}

		$scope.redirectTo = function(url) {
			$location.url(url);
		}

		$scope.getActors = function() {
			$scope.movie.acteurs.forEach(function(key, value) {
				var getDetailedActor = 'http://api.themoviedb.org/3/person/' + key.id + '?api_key=' + API_KEY;
				$http.get(getDetailedActor).then(function(res) {
					key.info = res.data;
					//console.log(key.info);
				})
			})

			afficherEffet(2,2);
		}

		//$scope.thing = ThingService.recupererFilmBidon();



	});
