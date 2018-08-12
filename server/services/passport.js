const GoogleStrategy = require('passport-google-oauth20').Strategy,
      FacebookStrategy = require('passport-facebook').Strategy,
      passport = require('passport'),
      mongoose = require('mongoose'),
      keys = require('../config/dev'),
      User = mongoose.model('user');

// Serialize & Deserialize ID

passport.serializeUser((user, done) => {
        done(null, user._id)
});

passport.deserializeUser((id, done) => {
    const userId = mongoose.Schema.Types.ObjectId(id);
    User.findById(userId, (err, user) => {
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
    async (accessToken, refreshToken, profile, done) => {
          console.log(accessToken);
          console.log(profile);
        // Check whether user exists
         const existingUser = await User.findOne({ id: profile.id});
            if (existingUser) {
                return done(null, existingUser);
            }
         
            // Create new User
            const newUser =  await new User({ 
                id: profile.id,
                name: profile.displayName,
                savedQuotes: []
                }).save();
            console.log('New User Created')
          done(null, newUser);
            
    }
));

// Facebook Strategy

passport.use(
    new FacebookStrategy({
          clientID: keys.facebookClientId,
          clientSecret: keys.facebookClientSecret,
          callbackURL: '/auth/facebook/callback',
          proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
          console.log(profile)
          const existingUser = await User.findOne({ id: profile.id});
            if (existingUser) {
                return done(null, existingUser)
            }    
                // Create new User
          const newUser = await new User({
                id: profile.id,
                name: profile.displayName,
                savedQuotes: []
                }).save();
          done(null, newUser) 
                
    }
));
 

