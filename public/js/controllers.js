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
	var topGames = 'https://api.twitch.tv/kraken/games/top?limit=6'
	var topStreamers = 'https://api.twitch.tv/kraken/streams?limit=5'
	$scope.display = {searchQuery: false};
	///// POPULATE VIEW WITH DEFAULT TOP GAMES AND STREAMERS /////
	$http({
		method: 'GET',
		url: topGames
	}).then(function successCallback(res){
		$scope.display.popGames = res.data.top;//.game.box.medium;
	}, function failCallback(res){
		console.log("THE SYSTEM IS DOWN");
	});
	$http({
		method: 'GET',
		url: topStreamers
	}).then(function successCallback(res){
		$scope.display.popStreamers = res.data.streams;//.preview.small;
		$scope.display.popViewers = res.data.streams;//.viewers;
	}, function failCallback(res){
		console.log("THE SYSTEM IS DOWN");
	});
	///// POPULATE VIEW WITH QUERY GAME AND/OR STREAMER /////
	$scope.searchTwitch = function () {		
		var searchStringGame =
			'https://api.twitch.tv/kraken/search/games?q=' + $scope.searchData + '&type=suggest';
		var searchStringStreamer =	
			'https://api.twitch.tv/kraken/search/streams?q=' + $scope.searchData + '&type=suggest';	

		var gameQ = $http({
					method: 'GET',
					url: searchStringGame
				});
		var streamerQ = $http({
					method: 'GET',
					url: searchStringStreamer
				});

		Promise.all([gameQ, streamerQ]).then(function(responses) {
			console.log(responses, 'responses');
			$scope.display.searchQuery = true;
			$scope.display.queryGames = responses[0].data.games;//.box.medium;
			$scope.display.queryStreamers = responses[1].data.streams;//.data.streams.preview.small;
			$scope.$apply();
		})	
	}
}])



	