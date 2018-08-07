const GoogleStrategy = require('passport-google-oauth20').Strategy,
      keys = require('../config/dev'),
      passport = require('passport'),
      mongoose = require('mongoose'),
      User = require('../models/User');

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser( (id, done) => {
    User.findById(id, (err, user) => {
        done(null, user);
    })
});

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
                    name: name.givenName
                    }).save();
            done(null, newUser);
            }
         })
    })
)

