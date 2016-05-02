(function() {

	'use strict';
	angular.module('formApp')
		.controller('FormCtrl', function($scope) {
			var formCtrl = this;

			formCtrl.formData = {};

			formCtrl.processForm = function() {
				console.log('In Process Form');
				alert('awesome');
			};
		});
})();