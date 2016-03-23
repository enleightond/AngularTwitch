app.controller('LoginController', ['$scope','$location','searchService', function($scope, $location, searchService) {
	$scope.test = "this is just a test";
	$scope.twitchLogin = function (provider) {
    	searchService.getGames();
      console.log("foo");

    };  
}]);

app.controller('SignupController', ['$scope','$location','searchService','$http', function($scope, $location, searchService, $http){
	$scope.error = '';		
	$scope.submit=function(){
		$http({
			method: 'POST',
			url:'/api/signup',
			data: {user:$scope.user}
		});
	}		
}])

app.controller('DashboardController', ['$scope','$location','searchService', '$http', function($scope, $location, searchService, $http) {
	var topGames = 'https://api.twitch.tv/kraken/games/top?limit=5'
	var topStreamers = 'https://api.twitch.tv/kraken/streams?limit=10'
	// get me stuff once when the pages loads
	$http({
		method: 'GET',
		url: topGames
	}).then(function successCallback(res){
		$scope.popGames = res.data.top;//.game.box.medium;
	}, function failCallback(res){
		console.log("THE SYSTEM IS DOWN");
	});

	$http({
		method: 'GET',
		url: topStreamers
	}).then(function successCallback(res){
		console.log(res)
		$scope.popStreamers = res.data.streams;//.preview.small;
		$scope.popViewers = res.data.streams;//.viewers;
	}, function failCallback(res){
		console.log("THE SYSTEM IS DOWN", res);
	});
	// get me stuff once a search is called
	$scope.searchTwitch = function () {		
		var searchString =
			'https://api.twitch.tv/kraken/search/games?q=' + 
			$scope.searchData + 
			'&type=suggest'

			$http({
				method: 'GET',
				url: searchString
			}).then(function successCallback(res){
				$scope.searchQuery = res.data.games;//.box.medium;
				$scope.searchStreamers = 				
			}, function failedCallback(res){
				console.log("THE SYSTEM IS DOWN", res);
			})
	}
}])



	