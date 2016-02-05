'use strict';

/**
* @ngdoc function
* @name camelCaseApp.controller:MainCtrl
* @description
* # MainCtrl
* Controller of the camelCaseApp
*/
angular.module('camelCaseApp')
	.directive('backImg', function(){
	    return function(scope, element, attrs){
	        attrs.$observe('backImg', function(value) {

	        var base_url = 'https://image.tmdb.org/t/p/original'

            element.css({
                'background-image': 'url(' + base_url+value +')',
                'background-size' : 'cover'
            });
        });
	    };
	})
.controller('MoviesCtrl', function($scope, $http, $sce, $location, API_KEY, $filter, $rootScope) {

	if($rootScope.historic == null) {
		$rootScope.historic = new Array();
	}

	$scope.go = function ( path ) {
	  $location.path( path );
	};

	var choices = $('#switch .choice'), text = $('#switch .or');
	var searchBox = $('.search-box');

	choices.on('click', function(){
		choices.toggleClass('on')
		searchBox.toggleClass('active')

		text.addClass('flip')
		setTimeout(function(){
			text.removeClass('flip')
		}, 1000)

	})


	//data analysys
	$http.get('/api/stats').then(function(res) {
		var top = res.data;

		if(top.actors){

			$http.get('http://api.themoviedb.org/3/person/'+top.actors.id+'/images?api_key=' + API_KEY).then(function(res) {
				if(res.data && res.data.profiles){

					var image = res.data.profiles[0];
					
					$scope.topActor = {
						id : top.actors.id,
						name : top.actors.name,
						image : image.file_path,
						score : top.actors.score
					} 

					console.log($scope.topActor);
				}else{
					$scope.topActor = null
				}
			});
		}

		if(top.movies){

			$http.get('http://api.themoviedb.org/3/movie/'+top.movies.id+'/images?api_key=' + API_KEY).then(function(res) {
				if(res.data && res.data.posters){

					var image = res.data.posters[0];
					
					$scope.topMovie = {
						id : top.movies.id,
						name : top.movies.name,
						image : image.file_path,
						score : top.movies.score
					} 

					console.log($scope.topMovie);
				}else{
					$scope.topMovie = null
				}
			});
		}

	});

	$scope.conf = {};

	$scope.resultat = {};

	/*$http.get('https://api.themoviedb.org/3/configuration?api_key=' + API_KEY).then(function(res) {
		$scope.conf = res.data;
	});*/

	$http.get('http://api.themoviedb.org/3/movie/popular?api_key=' + API_KEY).then(function(res) {
		angular.forEach(res.data.results, function(movie, key) {
			movie.poster_path = 'https://image.tmdb.org/t/p/w92' + movie.poster_path;
		})
		$scope.popular = res.data.results.slice(0, 11);

	});



	$scope.changeMoviesResult = function(data) {

		var result = data;

		var good = [];

		data.results.map(function(movie) {

			if(movie.vote_average >= 1) {

				if( ! movie.poster_path ){
					movie.poster_path = 'app/images/default.jpg';
				}else{
					movie.poster_path = 'https://image.tmdb.org/t/p/w92/' + movie.poster_path;
				}

				movie.vote = '(' + movie.vote_average + '/10)';
				movie.year = movie.release_date.substring(0, 4);

				good.push(movie);
			}

		})

		data.results = good;

		data.results = $filter('orderBy')(data.results, 'year');

		return data;
	}

	$scope.changeActorsResult = function(data) {
		angular.forEach(data.results, function(actor, value) {
			if(actor.profile_path != null) {
				actor.profile_path = 'https://image.tmdb.org/t/p/w92' + actor.profile_path;
			} else {
				actor.profile_path = 'app/images/default.jpg';
			}
		})

		return data;
	}

	$scope.selectedMovie = function(selected) {
		$scope.moveToMovie(selected.originalObject.id);
	}

	$scope.moveToMovie = function(id) {
		$location.url('movie/'+id);
	}

	$scope.selectedActor = function(selected) {
		$location.url('actor/'+selected.originalObject.id);
	}

	$scope.search = function() {

		var url = 'http://api.themoviedb.org/3/search/movie?api_key=' + api_key + '&query='+ $scope.searchQuery ;

		$http.get(url ).then(function(res) {
			var movie = res.data;
		})
	}


});
