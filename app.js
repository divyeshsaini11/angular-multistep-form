(function() {

	'use strict';

	angular.module('formApp', ['ui.router', 'ngAnimate'])
		.config(function($stateProvider, $urlRouterProvider) {
			$stateProvider
				.state('form', {
					url:'/form',
					templateUrl: 'form/form.html',
					controlller: 'FormCtrl as formCtrl'
				})
				.state('form.profile', {
					url:'/profile',
					templateUrl: 'form/form-profile.html'
				})
				.state('form.interest', {
					url:'/interest',
					templateUrl: 'form/form-interest.html'
				})
				.state('form.payment', {
					url:'/payment',
					templateUrl: 'form/form-payment.html'
				});

			$urlRouterProvider.otherwise('/form/profile');
		});	
})();