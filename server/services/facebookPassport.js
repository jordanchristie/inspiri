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
            console.log(profile);
            User.findOne({id: profile.id}, (err, existingUser) => {
                  if (existingUser) {
                        return done(null, existingUser)
                  } else {
                        const newUser = new User({
                              // enter schema info here
                        })
                       return done(null, newUser) 
                  }
            })
      }
      ))