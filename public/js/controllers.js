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

app.controller('DashboardController', ['$scope','$location','searchService', '$http', '$sce', function($scope, $location, searchService, $http, $sce) {
	var topGames = 'https://api.twitch.tv/kraken/games/top?limit=6'
	var topStreamers = 'https://api.twitch.tv/kraken/streams?limit=5'
	$scope.display = {searchQuery: false};
	$scope.stashGames = [];
	///// POPULATE VIEW WITH DEFAULT TOP GAMES AND STREAMERS /////
	$http({
		method: 'GET',
		url: topGames
	}).then(function successCallback(res){
			$scope.display.popGames = res.data.top;//.game.box.medium;
			console.log(res);
		}, 
		function failCallback(res){
			console.log("THE SYSTEM IS DOWN");
		});

	$http({
		method: 'GET',
		url: topStreamers
	}).then(function successCallback(res){
			$scope.display.popStreamers = res.data.streams;//.preview.small;
			$scope.display.popViewers = res.data.streams;//.viewers;
		}, 
		function failCallback(res){
			console.log("THE SYSTEM IS DOWN");
		});
	////////////////////////////////////////////////////////////////
	$scope.getStreamers = function (data) {
		searchService.getStreamers(data).then(function(res){
			if ($scope.display.searchQuery) {	
				$scope.display.queryStreamers = res;
			} else {
				$scope.display.popStreamers = res;
			}
		});
	}

	$scope.getStream = function (name) {
		$scope.channelName = name;
		$scope.twitchIframe = $sce.trustAsHtml(
		'<iframe src="http://player.twitch.tv/?channel=' + $scope.channelName + '&html5" height="648" width="1152" frameborder="0" scrolling="no" allowfullscreen="true" muted="false" autoplay="true"></iframe>');
	}

	$scope.getFav = function (favorite){
		var getFavObj = {}; 
			if (!!favorite.game) {
				getFavObj.name = favorite.game.name;
				getFavObj.img = favorite.game.box.medium;
			} else {
				getFavObj.name = favorite.name;
				getFavObj.img = favorite.box.medium;
			}
		for (var i = 0; i < $scope.stashGames.length; i++) {
			if($scope.stashGames[i].name === getFavObj.name){
				return;
			}
		}	
		$scope.stashGames.push(getFavObj);
	}
	///// POPULATE VIEW WITH QUERY GAME OR STREAMER /////
	$scope.searchTwitch = function () {		
		var searchStringGame =
			'https://api.twitch.tv/kraken/search/games?q=' + $scope.searchData + '&type=suggest';
		var searchStringStreamer =	
			'https://api.twitch.tv/kraken/streams?game=' + $scope.searchData;	
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
			$scope.display.queryStreamers = responses[1].data.streams;//preview.small;
			$scope.display.queryViewers = responses[1].data.streams;//.viewers;
			$scope.$apply();
		})	
	}
}])	