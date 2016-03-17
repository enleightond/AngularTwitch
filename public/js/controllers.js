app.controller('LoginController', ['$scope','$location','searchService', function($scope, $location, searchService) {
	$scope.test = "this is just a test";
	// searchService.getGames().then(function(data) {
	// 	$scope.games = data
	//});
	$scope.twitchLogin = function (provider) {
    	searchService.getGames();
      console.log("foo");

    };  

}]);

app.controller('DashboardController', ['$scope','$location','searchService', function($scope, $location, searchService) {
	searchService.getGames().then(function(data) {
		$scope.games = data
	});
}])



	