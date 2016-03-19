var express = require('express'),
 	router = express.Router(),
 	request = require('request'),
 	path = require('path'),
	logger = require('morgan'),
	cookieParser = require('cookie-parser'),
	bodyParser = require('body-parser'),

	app = express();

router.get('/', function(req, res, next) {
  res.render('index')
});

router.get('/dashboard/search', function(req,res, next) {
	var twQuery = req.query.twitcherSearch;

	var twitchUrl = 'https://api.twitch.tv/kraken/search/games?q=' + twQuery + '&type=suggest';
	var twitchUrl2 = 'https://api.twitch.tv/kraken/search/streams?q=' + twQuery + '&type=suggest';
	var twitchUrl3 = 'https://api.twitch.tv/kraken/search/streams?q=' + twQuery + '&type=suggest';
	var twitchUrl4 = 'https://api.twitch.tv/kraken/search/games?q=' + twQuery + '&type=suggest';
	request.get(twitchUrl, function (error, response, body) {
	  	var data = JSON.parse(body);

		request.get(twitchUrl2, function (error, response, body) {
		  	data.streamData = JSON.parse(body);

			request.get(twitchUrl3, function (error, response, body) {
			  	data.streamerData = JSON.parse(body);

				request.get(twitchUrl4, function (error, response, body) {
				  	data.gameImg = JSON.parse(body);


					res.render('dashboard', {title: "Twitcher's Digest", games: data.games, streams: data.streamData.streams, streams: data.streamerData.streams, games: data.gameImg.games } );

				});
			});
		});
	});
});

module.exports = router;

