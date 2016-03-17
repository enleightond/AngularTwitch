var express = require('express');
var passport = require("passport");
var twitchStrategy = require("passport-twitch").Strategy;
var router = express.Router();

router.use(passport.initialize());

passport.use(new twitchStrategy({
    clientID: process.env.TWITCH_CLIENT_ID,
    clientSecret: process.env.TWITCH_CLIENT_SECRET,
    callbackURL: "http://127.0.0.1/signup/callback",
    scope: "user_read"
  },
  function(accessToken, refreshToken, profile, done) {

    User.findOrCreate({ twitchId: profile.id }, function (err, user) {
      return done(err, user);
    });
  }
));


passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(user, done) {
    done(null, user);
});

router.get("/", function (req, res) {
    res.render("index");
});

router.get("/signup", passport.authenticate("twitch"));
router.get("/signup/callback", passport.authenticate("twitch", { failureRedirect: "/" }), function(req, res) {
    // Successful authentication, redirect home.
    res.redirect("/dashboard");
});
