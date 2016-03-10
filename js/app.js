var app = angular.module('angTwitch', ['ngDraggable']);

app.config(function($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl: "index.html", 
			controller: "Login"
		})
		.when('/dashboard', {
			templateUrl: "templates/dashboard.html",
			controller: "Dashboard"
		})

});