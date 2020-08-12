const GoogleStrategy = require("passport-google-oauth20").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;
const TwitterStrategy = require("passport-twitter").Strategy;
const LocalStrategy = require("passport-local").Strategy;
const passport = require("passport");
const mongoose = require("mongoose");
const keys = require("../config/keys");
const User = mongoose.model("user");

// Serialize & Deserialize ID

passport.serializeUser((user, done) => {
  done(null, user._id);
});

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
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
      const existingUser = await User.findOne({ _id });
      if (existingUser) {
        return done(null, existingUser);
      }
      // Create new User
      const newUser = await new User({
        username: profile.displayName,
        avatar: profile._json.image.url,
        savedQuotes: [],
      }).save();
      done(null, newUser);
    }
  )
);

// Facebook Strategy

passport.use(
  new FacebookStrategy(
    {
      clientID: keys.facebookClientID,
      clientSecret: keys.facebookClientSecret,
      callbackURL: "/auth/facebook/callback",
      profileFields: ["id", "name", "photos"],
      proxy: true,
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ _id });
      if (existingUser) {
        return done(null, existingUser);
      }
      // Create new User
      const newUser = await new User({
        username: profile.displayName,
        avatar: profile.photos[0].value,
        savedQuotes: [],
      }).save();
      done(null, newUser);
    }
  )
);

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
      const existingUser = await User.findOne({ _id });

      if (existingUser) {
        done(null, existingUser);
      }

      const newUser = await new User({
        username: profile.displayName,
        avatar: profile.photos[0].value,
        savedQuotes: [],
      }).save();

      done(null, newUser);
    }
  )
);

// Local Strategy

passport.use(
  "local",
  new LocalStrategy(async (username, password, done) => {
    try {
      const existingUser = await User.findOne({ username });
      // If login user doesn't exist, throw error

      if (!existingUser) {
        return done(null, false, { message: "User not found." });
      }

      // If username exists, check password

      const validPassword = () =>
        username && password === existingUser.password;

      if (!validPassword) {
        return done(null, false, { message: "Invalid password" });
      }

      // If username is found and password is valid, return the user

      if (existingUser && validPassword) {
        console.log("existingUser", existingUser);
        done(null, existingUser);
      }
      // Otherwise, create a new user
      else {
        const newUser = await new User({
          username,
          password,
          avatar: null,
          savedQuotes: [],
        }).save();

        done(null, newUser);
      }
    } catch (error) {
      done(error, false, { message: error });
    }
  })
);
