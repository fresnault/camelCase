'use strict';

/**
* @ngdoc function
* @name camelCaseApp.controller:MainCtrl
* @description
* # MainCtrl
* Controller of the camelCaseApp
*/
angular.module('camelCaseApp')
.controller('MoviesCtrl', function($scope, $http, $sce, $location, API_KEY, $filter, $rootScope) {

	$rootScope.historic = new Array();

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
