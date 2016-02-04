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
