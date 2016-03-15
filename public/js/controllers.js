app.controller('LoginController', ['$scope', 'searchService', function($scope, $location, searchService) {
	$scope.test = "this is just a test";
	$scope.games = searchService.getGames();

}]);


app.controller('DashboardController', ['$scope', 'searchService', function($scope, $location, searchService) {

}])
	