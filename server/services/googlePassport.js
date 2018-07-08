const GoogleStrategy = require('passport-google-oauth20').Strategy,
      keys = require('../config/keys'),
      passport = require('passport'),
      mongoose = require('mongoose'),
      User = require('../models/User');

passport.serializeUser((user, dane) => {
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    const user = await User.findById(user.id);

    done(null, user);
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

        const user = await new User({ googleId: profile.id}).save();

        done(null, user);
    })
)

