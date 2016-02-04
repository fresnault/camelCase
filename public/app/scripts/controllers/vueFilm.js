'use strict';

/**
 * @ngdoc function
 * @name camelCaseApp.controller:vuePolygonInteractiveCtrl
 * @description
 * # vuePolygonInteractiveCtrl
 * Controller of the camelCaseApp
 */
angular.module('camelCaseApp')
	.controller('vueFilmCtrl', function($scope, ThingService) {

		$scope.thing = ThingService.recupererFilmBidon();

		
	});