var app = angular.module('angTwitch', ['ngRoute', 'ngDraggable']);

app.config(['$routeProvider',function($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl: "/partials/login.html", 
			controller: "LoginController"
		})
		.when('/dashboard', {
			templateUrl: "/partials/dashboard.html",
			controller: "DashboardController"
		}).otherwise({
    redirectTo: '/'
  	});
	$locationProvider.html5Mode(true);

}]);