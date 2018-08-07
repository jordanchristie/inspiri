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
     async (accessToken, refreshToken, profile, done) => {
         const existingUser = await User.findOne({ googleId: profile.id});
        if (existingUser) {
            return done(null, existingUser);
        }

        const user = await new User({ 
            googleId: profile.id,
            name: profile.givenName
            }).save();
        done(null, user);
    })
)

