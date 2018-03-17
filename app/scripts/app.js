/*jshint unused:false */
'use strict';

/**
 * @ngdoc overview
 * @name categoryComponentApp
 * @description
 * # categoryComponentApp
 *
 * Config module of the application.
 */

var app;
(function (angular) {

	var moduleDependencies = [];
	moduleDependencies = [
		'ui.router'
	];

	app = angular.module('categoryComponentApp', moduleDependencies);

	app.config([
		'$httpProvider', function ($httpProvider) {
			$httpProvider.interceptors.push('interceptorSrv');
			var spinnerFunction = function(data){
				return data;
			};
			$httpProvider.defaults.transformRequest.push(spinnerFunction);
		}
	]);
}(angular));