// app.module.js
(function() {
  'use strict';
	
	angular
	  .module('app', ['ngRoute'])
	  .config(configuration);

	configuration.$inject = ['$routeProvider', '$locationProvider'];

	function configuration($routeProvider, $locationProvider) {
		$locationProvider.html5Mode(true);
	}

})();