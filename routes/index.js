var express = require('express'),
 	router = express.Router(),
 	request = require('request'),
 	knex = require('../db/knex'),
 	session = require('cookie-session'),
 	path = require('path'),
	favicon = require('serve-favicon'),
	logger = require('morgan'),
	cookieParser = require('cookie-parser'),
	bodyParser = require('body-parser'),
	routes = require('./routes/index'),

	app = express();

router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../views', 'index'))
});

router.get('/dashboard/search', function(req,res,next){
	var getSearch = req.query.twSearch;
})

module.exports = router;

