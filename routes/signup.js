var express = require('express');
var router = express.Router();
var knex = require('../db/knex');
var passport = require("passport")
var twitchStrategy = require("passport-twitch").Strategy;
//var bcrypt = require('bcrypt');

function Users() {
	return knex('users');
}

/* GET users listing. */
router.get('/signup', function(req, res, next) {
	console.log(req.body);
  res.send('respond with a resource');
});


// router.get("/signup", passport.authenticate("twitch"));
// router.get("/signup/callback", passport.authenticate("twitch", { failureRedirect: "/" }), function(req, res) {
//     // Successful authentication, redirect home.
//     res.redirect("/dashboard");
// });

// passport.use(new twitchStrategy({
//     clientID: process.env.TWITCH_CLIENT_ID,
//     clientSecret: process.env.TWITCH_CLIENT_SECRET,
//     callbackURL: "http://127.0.0.1/signup/callback",
//     scope: "user_read"
//   },
//   function(accessToken, refreshToken, profile, done) {

//     User.findOrCreate({ twitchId: profile.id }, function (err, user) {
//       return done(err, user);
//     });
//   }
// ));

// passport.serializeUser(function(user, done) {
//     done(null, user);
// });

// passport.deserializeUser(function(user, done) {
//     done(null, user);
// });

// router.get("/", function (req, res) {
//     res.render("index");
// });

//router.listen(3000);
router.post('/signup', function (req, res) {
	
	if(req.body.password === req.body.confirm){
		
		bcrypt.genSalt(10, function(err, salt) {

		    bcrypt.hash(req.body.password, salt, function(err, hash) {
		    	knex('users').insert({name: req.body.name, email: req.body.email, password: hash }).then(function(){
		    	})		
			}) 
		})
	} 
	else if (req.body.password !== req.body.confirm){
		return "Passwords does not match!";
	}

	else if (!req.body) {
		return res.sendStatus(400)
		}		
		  res.redirect('/dashboard')
	
	
});

module.exports = router;
