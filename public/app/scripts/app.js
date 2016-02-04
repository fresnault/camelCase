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
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })

      .when('/movies', {
        templateUrl: 'app/views/movies.html',
        controller: 'MoviesCtrl',
        controllerAs: 'movies'
      })

      .when('/vuePolygon', {
        templateUrl: 'app/views/vuePolygon.html',
        controller: '',
        controllerAs: ''
      })
      .when('/vueFilm', {
        templateUrl: 'app/views/vueFilm.html',
        controller: 'vueFilmCtrl',
        controllerAs: 'vueFilm'
      })


      .when('/about', {
        templateUrl: 'app/views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
