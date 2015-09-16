// app.module.js
(function() {
  'use strict';

	angular
		.module('app')
		.controller('mainCtrl', mainCtrl);

	mainCtrl.$inject = ['$http'];

	function mainCtrl($http) {
		/* jshint validthis: true */
		var model = this;

		// récupération des posts avec json-api
		$http.get('/wp-json/posts')
			.success(function(res){
				model.posts = res;
			}
		);

		model.label = 'label';
		
	}

})();