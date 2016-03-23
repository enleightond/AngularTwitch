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

app.controller('DashboardController', ['$scope','$location','searchService', '$http', function($scope, $location, searchService, $http) {
	var topGames = 'https://api.twitch.tv/kraken/games/top?limit=5'
	var topStreamers = 'https://api.twitch.tv/kraken/streams?limit=10'
	console.log(topGames, topStreamers)
	// get me stuff once when the pages loads
	$http({
		method: 'GET',
		url: topGames
	}).then(function successCallback(res){
		$scope.data.top[].game.medium;
	}, function failedAtEverythingCallback(res){
		console.log("THE SYSTEM IS DOWN", res);
	});

	$http({
		method: 'GET',
		url: topStreamers
	}).then(function successCallback(res){
		$scope.data.streams[].preview.small;
	}, function failedAtEverythingCallback(res){
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
				console.log(res);
			}, function failedAtEverythingCallback(res){
				console.log("THE SYSTEM IS DOWN", res);
			})
		// $http(get me some shit at this address) {
		// 	when you got it,  log it out to me.
		// }
	}



			
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



	