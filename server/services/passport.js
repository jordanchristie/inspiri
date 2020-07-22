const GoogleStrategy = require("passport-google-oauth20").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;
const TwitterStrategy = require("passport-twitter").Strategy;
const passport = require("passport");
const mongoose = require("mongoose");
const keys = require("../config/keys");
const User = mongoose.model("user");

// Serialize & Deserialize ID

passport.serializeUser((user, done) => {
  done(null, user._id);
});

passport.deserializeUser((id, done) => {
  const userId = mongoose.Types.ObjectId(id);
  User.findById(userId, (err, user) => {
    done(err, user);
  });
});

// Google Strategy

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
      proxy: true,
    },
    async (accessToken, refreshToken, profile, done) => {
      // Check whether user exists
      const existingUser = await User.findOne({ id: profile.id });
      if (existingUser) {
        return done(null, existingUser);
      }

      // Create new User
      const newUser = await new User({
        id: profile.id,
        fullName: profile.displayName,
        firstName: profile.name.givenName,
        avatarUrl: profile._json.image.url,
        savedQuotes: [],
      }).save();
      done(null, newUser);
    }
  )
);

// Facebook Strategy

// passport.use(
//   new FacebookStrategy(
//     {
//       clientID: keys.facebookClientID,
//       clientSecret: keys.facebookClientSecret,
//       callbackURL: "/auth/facebook/callback",
//       profileFields: ["id", "name", "photos"],
//       proxy: true
//     },
//     async (accessToken, refreshToken, profile, done) => {
//       const existingUser = await User.findOne({ id: profile.id });
//       if (existingUser) {
//         return done(null, existingUser);
//       }
//       // Create new User
//       const newUser = await new User({
//         id: profile.id,
//         fullName: profile.displayName,
//         firstName: profile.name.givenName,
//         avatarUrl: profile.photos[0].value,
//         savedQuotes: []
//       }).save();
//       done(null, newUser);
//     }
//   )
// );

// Twitter Strategy

passport.use(
  new TwitterStrategy(
    {
      consumerKey: keys.twitterClientID,
      consumerSecret: keys.twitterClientSecret,
      callbackURL: "/auth/twitter/callback",
      passReqToCallback: true,
    },
    async (req, accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ id: profile.id });

      if (existingUser) {
        done(null, existingUser);
      }

      const newUser = await new User({
        id: profile.id,
        fullName: profile.name,
        avatarUrl: profile.profile_image_url,
        savedQuotes: [],
        journalEntries: [],
      }).save();

      done(null, newUser);
    }
  )
);
