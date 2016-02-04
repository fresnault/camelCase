'use strict';

/**
 * @ngdoc overview
 * @name camelCaseApp
 * @description
 * # camelCaseApp
 *
 * Main module of the application.
 */
angular
  .module('camelCaseApp', [
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngTouch',
    'angucomplete-alt'
  ])
  .constant('API_KEY', '16f6aa27277494afd13f5497d6ceba9e')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/views/search.html',
        controller: 'MoviesCtrl',
        controllerAs: 'search'
      })
      .when('/actor/:id', {
        templateUrl: 'app/views/actors.html',
        controller: 'actorsCtrl',
        controllerAs: 'actorsCtrl'
      })
      .when('/movie/:id', {
        templateUrl: 'app/views/movie.html',
        controller: 'movieCtrl',
        controllerAs: 'movie'
      })

      .otherwise({
        redirectTo: '/'
      });
  });

function shuffle(o){
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
}