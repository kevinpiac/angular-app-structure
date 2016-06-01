angular
	.module('App', ['ngRoute'])
	.config(['$routeProvider', routeProvider]);

function routeProvider($routeProvider) {
	$routeProvider
	.when('/', {templateUrl: 'app/layouts/homeLayout.html'})
	.otherwise({redirectTo: '/'});
}
