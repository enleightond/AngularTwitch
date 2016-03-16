var express = require('express'),
 	router = express.Router(),
 	request = require('request'),
 	path = require('path'),
	favicon = require('serve-favicon'),
	logger = require('morgan'),
	cookieParser = require('cookie-parser'),
	bodyParser = require('body-parser'),

	app = express();

router.get('/', function(req, res, next) {
  res.render('index')
});

router.get('/dashboard/search', function(req,res,next){
	var getSearch = req.query.twSearch;
})

module.exports = router;

