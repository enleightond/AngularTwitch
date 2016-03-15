var app = angular.module('angTwitch', ['ngDraggable']);

app.config(function($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl: "/partials/login.html", 
			controller: "Login"
		})
		.when('/dashboard', {
			templateUrl: "partials/dashboard.html",
			controller: "Dashboard"
		}).otherwise({
    redirectTo: '/'
  	});
	$locationProvider.html5Mode(true);

});