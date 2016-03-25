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
}])

