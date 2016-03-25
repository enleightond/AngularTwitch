var express = require('express');
var passport = require("passport");
var twitchStrategy = require("passport-twitch").Strategy;
var router = express.Router();

passport.use(new twitchStrategy({
    clientID: process.env.TWITCH_CLIENT_ID,
    clientSecret: process.env.TWITCH_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/twitch/callback",
    scope: "user_read"
  },
  function(accessToken, refreshToken, profile, done) {
      var err;
      return done(err, profile);
  }
));

router.get("/", passport.authenticate("twitch"))
router.get("/callback", passport.authenticate("twitch", { failureRedirect: "/api/signup" }), function(req, res) {
    // Successful authentication, redirect to dashboard.
    res.redirect("/#/dashboard");
});

passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(user, done) {
    done(null, user);
});

module.exports = router
