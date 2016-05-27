var myApp = angular.module('myApp',['ngRoute']);
myApp.config(function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: 'views/main.html',
		controller: 'monController'
	})
	.when('/add', {
		templateUrl: 'views/add.html',
		controller: 'monController'
	})
	.otherwise({
		redirectTo: '/'
	});
});
