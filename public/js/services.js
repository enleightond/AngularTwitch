app.service('searchService' , ['$http', function($http) {
	return {
		getGames:function(){
			return $http.get("/auth/twitch/").then(function(res){
				console.log(res.data)
				return res.data
			})

		} 	
	}
}])