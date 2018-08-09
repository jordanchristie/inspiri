const FacebookStrategy = require('passport-facebook').Strategy,
      keys = require('../config/keys'),
      passport = require('passport'),
      mongoose = require('mongoose'),
      User = require('../models/User');


passport.use(
      new FacebookStrategy({
            clientID: keys.facebookClientId,
            clientSecret: keys.facebookClientSecret,
            callbackURL: '/auth/facebook/callback',
            proxy: true
      },
      (accessToken, refreshToken, profile, done) => {
            User.findOne({id: profile.id}, (err, existingUser) => {
                  console.log(profile.id)
                  if (existingUser) {
                        return done(null, existingUser)
                  } else {
                        const newUser = new User({
                              // enter schema info here
                              name: profile.displayName
                        }).save();
                       return done(null, newUser) 
                  }
            })
      }
      ))