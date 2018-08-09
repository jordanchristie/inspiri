const GoogleStrategy = require('passport-google-oauth20').Strategy,
      keys = require('../config/dev'),
      passport = require('passport'),
      mongoose = require('mongoose'),
      User = require('../models/User');

passport.use( 
    new GoogleStrategy({
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback',
        proxy: true
    },
      (accessToken, refreshToken, profile, done) => {
         User.findOne({ googleId: profile.id}, (err, existingUser) => {
            if (existingUser) {
                return done(null, existingUser);
            } else {
                const newUser = new User({ 
                    googleId: profile.id,
                    name: profile.displayName
                    }).save();
            done(null, newUser);
            }
         })
    })
)

