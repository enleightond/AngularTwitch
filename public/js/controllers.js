app.controller('LoginController', ['$scope', '$location','searchService', function($scope, $location, searchService) {
	$scope.test = "this is just a test";
	// searchService.getGames().then(function(data) {
	// 	$scope.games = data
	//});

}]);

app.controller('DashboardController', ['$scope', '$location','searchService', function($scope, $location, searchService) {
	searchService.getGames().then(function(data) {
		$scope.games = data
	});
}])
	