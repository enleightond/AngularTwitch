var app = angular.module('angTwitch', ['ngRoute', 'satellizer']);

app.config(['$routeProvider','$locationProvider', '$authProvider', function($routeProvider, $locationProvider, $authProvider){
	$routeProvider
		.when('/', {
			templateUrl: "/partials/signup.html", 
			controller: "LoginController"
		})
		.when('/login', {
			templateUrl: "/partials/login.html", 
			controller: "LoginController"
		})
		.when('/dashboard', {
			templateUrl: "/partials/dashboard.html",
			controller: "DashboardController"
		})
		.otherwise({
		    redirectTo: '/'
		});
			// $locationProvider.html5Mode(true);

	$authProvider
		.twitch({
      		clientId: 'TWITCH_CLIENT_ID',
      		url: '/auth/twitch',
  			authorizationEndpoint: 'https://api.twitch.tv/kraken/oauth2/authorize',
		  	redirectUri: window.location.origin,
		  	requiredUrlParams: ['scope'],
		  	scope: ['user_read'],
		  	scopeDelimiter: ' ',
		  	display: 'popup',
		  	type: '2.0',
		  	popupOptions: { width: 500, height: 560 }
    	});
}]);