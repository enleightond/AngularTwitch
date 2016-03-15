app.service('searchService' , ['$http', function($http) {
	return {
		getGames:function(){
			return $http.get("https://ttv-api.s3.amazonaws.com/twitch.min.js").then(function(res){
				console.log(res.data)
				return res.data
			})

		} 	
	}
}])