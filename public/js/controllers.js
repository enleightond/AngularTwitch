app.controller('LoginController', ['$scope','$location','searchService', function($scope, $location, searchService) {
	$scope.test = "this is just a test";
	$scope.twitchLogin = function (provider) {
    	searchService.getGames();
      console.log("foo");

    };  
}]);

app.controller('SignupController', ['$scope','$location','searchService','$http', function($scope, $location, searchService, $http){
		// $scope.user = {};
		$scope.error = '';		
		$scope.submit=function(){
			$http({
				method: 'POST',
				url:'/api/signup',
				data: {user:$scope.user}
			});
		}		
}])

app.controller('DashboardController', ['$scope','$location','searchService', function($scope, $location, searchService) {
		$scope.searchTwitch = function(){
			var twQuery = req.query.twitcherSearch;
			var twitchUrl = 'https://api.twitch.tv/kraken/search/games?q=' + twQuery + '&type=suggest';
			var twitchUrl2 = 'https://api.twitch.tv/kraken/search/streams?q=' + twQuery + '&type=suggest';
			var twitchUrl3 = 'https://api.twitch.tv/kraken/search/streams?q=' + twQuery + '&type=suggest';
			var twitchUrl4 = 'https://api.twitch.tv/kraken/search/games?q=' + twQuery + '&type=suggest';
		}
		
		searchService.getGames().then(function(data) {
			$scope.games = data('/dashboard/search', function(req,res, next) {

				request.get(twitchUrl, function (error, response, body) {
				  	var data = JSON.parse(body);

					request.get(twitchUrl2, function (error, response, body) {
					  	data.streamData = JSON.parse(body);

						request.get(twitchUrl3, function (error, response, body) {
						  	data.streamerData = JSON.parse(body);

							request.get(twitchUrl4, function (error, response, body) {
							  	data.gameImg = JSON.parse(body);


								res.render('dashboard', {games: data.games, streams: data.streamData.streams, streams: data.streamerData.streams, games: data.gameImg.games } );

							});
						});
					});
				});
			});
		});
	}])



	