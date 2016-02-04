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
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/views/movies.html',
        controller: 'MoviesCtrl',
        controllerAs: 'movies'
      })
      .when('/vuePolygon', {
        templateUrl: 'app/views/vuePolygon.html',
        controller: '',
        controllerAs: ''
      })
      .when('/vueFilm/:id', {
        templateUrl: 'app/views/vueFilm.html',
        controller: 'vueFilmCtrl',
        controllerAs: 'vueFilm'
      })

      .otherwise({
        redirectTo: '/'
      });
  });
