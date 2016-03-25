app.service('searchService' , ['$http', function($http) {
	return {
		getStreamers:function(data){
			console.log(data);
			return $http.get('https://api.twitch.tv/kraken/streams?game='
				+ data).then(function(res){
				// return $http.get('https://api.twitch.tv/kraken/search/streams?q='
				// + data + '&type=suggest&hls=true').then(function(res){
					console.log(res);
				return res.data.streams;//.preview.small
			})
		} 	
	}

	// return {
	// 	getGame:function(data){
	// 		console.log(data);
	// 		return $http.get('https//api.twitch.tv/kraken/search/games?q=' 
	// 		+ data + '&type=suggest').then(function(res){
	// 			console.log(res.data)
	// 			return res.data.streams[0].preview.small
	// 		})
	// 	} 	
	// }
	
}])



app.service('signupService', ['$http',function($http){
	// getUser:function(){
		
	// }
}])

app.service('streamingService', ['$http',function($http){
	 
}])

