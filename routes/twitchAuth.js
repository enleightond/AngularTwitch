var express = require('express');
var passport = require("passport");
var twitchStrategy = require("passport-twitch").Strategy;
var router = express.Router();

// router.use(passport.initialize());

passport.use(new twitchStrategy({
    clientID: process.env.TWITCH_CLIENT_ID,
    clientSecret: process.env.TWITCH_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/twitch/callback",
    scope: "user_read"
  },
  function(accessToken, refreshToken, profile, done) {
    // User.findOrCreate({ twitchId: profile.id }, function (err, user) {
      var err;
      console.log("foobar");
      console.log(profile);
      // var err = new Error("ErrROR"); 
      return done(err, profile);
    // });
  }
));

// router.get("/", function (req, res) {
//     // res.render("index");
//     console.log("foobar2");
// });

router.get("/", passport.authenticate("twitch"));
router.get("/callback", passport.authenticate("twitch", { failureRedirect: "/api/signup" }), function(req, res) {
    // Successful authentication, redirect home.
    console.log("foobar3");
    res.redirect("/#/dashboard");
});

passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(user, done) {
    done(null, user);
});

module.exports = router
