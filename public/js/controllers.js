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
	// var twQuery = req.query.twitcherSearch;
	// var twitchUrl = 'https://api.twitch.tv/kraken/search/games?q=' + twQuery + '&type=suggest';
	// var twitchUrl2 = 'https://api.twitch.tv/kraken/search/streams?q=' + twQuery + '&type=suggest';
	// var twitchUrl3 = 'https://api.twitch.tv/kraken/search/streams?q=' + twQuery + '&type=suggest';
	// var twitchUrl4 = 'https://api.twitch.tv/kraken/search/games?q=' + twQuery + '&type=suggest';
	
	// searchService.getGames().then(function(data) {
	// 	$scope.games = data('/dashboard/search', function(req,res, next) {

	// 		request.get(twitchUrl, function (error, response, body) {
	// 		  	var data = JSON.parse(body);

	// 			request.get(twitchUrl2, function (error, response, body) {
	// 			  	data.streamData = JSON.parse(body);

	// 				request.get(twitchUrl3, function (error, response, body) {
	// 				  	data.streamerData = JSON.parse(body);

	// 					request.get(twitchUrl4, function (error, response, body) {
	// 					  	data.gameImg = JSON.parse(body);


	// 						res.render('dashboard', {games: data.games, streams: data.streamData.streams, streams: data.streamerData.streams, games: data.gameImg.games } );

	// 					});
	// 				});
	// 			});
	// 		});
	// 	});
	// });
}])


	