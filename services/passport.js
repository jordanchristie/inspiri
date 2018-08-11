const GoogleStrategy = require('passport-google-oauth20').Strategy,
      FacebookStrategy = require('passport-facebook').Strategy,
      passport = require('passport'),
      mongoose = require('mongoose'),
      keys = require('../config/dev'),
      User = require('../models/User');

// Serialize & Deserialize ID

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
          // Check whether user exists
         User.findOne({ googleId: profile.id}, (err, existingUser) => {
            if (existingUser) {
                console.log(existingUser)
                return done(null, existingUser);
            } 
            // Create new User
            const newUser =  new User({ 
                google: {
                    id: profile.id,
                    name: profile.displayName
                },
                savedQuotes: []
                }).save();
            console.log('New User Created')
            done(null, newUser);
            
         })
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
          User.findOne({facebookId: profile.id},(err, existingUser) => {
            if (existingUser) {
                return done(null, existingUser)
            } 
          })    
                // Create new User
          const newUser = new User({
                facebook: {
                    facebookId: profile.id,
                    name: profile.displayName,
                },
                savedQuotes: []
                }).save();
                done(null, newUser) 
                
    }
));
 

