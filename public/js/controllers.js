app.controller('LoginController', ['$scope', '$location','searchService', '$auth', function($scope, $location, searchService, $auth) {
	$scope.test = "this is just a test";
	// searchService.getGames().then(function(data) {
	// 	$scope.games = data
	//});
	$scope.twitchLogin = function (provider) {
    	console.log("foo");
    };

	
    
    // $(function() {  
    //   Twitch.init({clientId: 'TWITCH_CLIENT_ID'}, function(error, status) {
    //     if (status.authenticated) {
    //       // Already logged in, hide button
    //       $('.twitch-connect').hide()
    //     }
    //   });

    //       $('.twitch-connect').click(function() {
    //         Twitch.login({
    //           scope: ['user_read', 'channel_read']
    //         });
    //       })
    
  

}]);

app.controller('DashboardController', ['$scope', '$location','searchService', function($scope, $location, searchService) {
	searchService.getGames().then(function(data) {
		$scope.games = data
	});
}])



	