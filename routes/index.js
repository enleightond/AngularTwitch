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

module.exports = router;

