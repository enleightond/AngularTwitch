var app = angular.module('angTwitch', ['ngRoute']);

app.config(['$routeProvider','$locationProvider',function($routeProvider, $locationProvider){
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