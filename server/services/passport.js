const GoogleStrategy = require('passport-google-oauth20').Strategy,
      FacebookStrategy = require('passport-facebook').Strategy,
      keys = require('../config/dev'),
      passport = require('passport'),
      mongoose = require('mongoose'),
      User = require('../models/User');

//Serialize & Deserialize ID

passport.serializeUser((user, done) => {
        done(null, user.id)
});

passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
        done(err, user);
    })
});

// Google Strategy

passport.use( 
    new GoogleStrategy({
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback',
        proxy: true
    },
      (accessToken, refreshToken, profile, done) => {
          console.log(accessToken);
          console.log(profile);
        //  User.findOne({ googleId: profile.id}, (err, existingUser) => {
        //     if (existingUser) {
        //         return done(null, existingUser);
        //     } else {
        //         const newUser = new User({ 
        //             _id: profile.id,
        //             name: profile.displayName
        //             }).save();
        //     done(null, newUser);
        //     }
        //  })
    })
)

// Facebook Strategy

passport.use(
    new FacebookStrategy({
          clientID: keys.facebookClientId,
          clientSecret: keys.facebookClientSecret,
          callbackURL: '/auth/facebook/callback',
          proxy: true
    },
    (accessToken, refreshToken, profile, done) => {
          console.log(profile)
          User.findOne({id: profile.id}, (err, existingUser) => {
                if (existingUser) {
                      return done(null, existingUser)
                } else {
                      const newUser = new User({
                            _id: profile.id,
                            name: profile.displayName,
                            savedQuotes: []
                      }).save();
                     return done(null, newUser) 
                }
          })
    }
))
 

