const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const User = require('../models/user');
const config = require('../config');
const LocalStrategy = require('passport-local');


// Create local strategy
const localLogin = new LocalStrategy({}, function(email, passport, done) {

})

// Setup options for JWT Strategy
const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: config.secret,
}

// Create JWT Strategy
const jwtLogin = new JwtStrategy(jwtOptions, function(payload, done) {
  // See if the user ID on the payload exists in our DB
  // If it does, call 'done' with that the payload
  // otherwise, call done without user object

  User.findById(payload.sub, function(err, user) {
    if (err) { return done(err, false) }

    if (user) {
      done(null, user);
    } else {
      done(null, false);
    }
  })
})


// Tell passport to use strategy
passport.use(jwtLogin);