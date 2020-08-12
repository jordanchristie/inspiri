const express = require("express"),
  mongoose = require("mongoose"),
  bodyParser = require("body-parser"),
  cors = require("cors"),
  cookieSession = require("cookie-session"),
  passport = require("passport"),
  keys = require("./config/keys"),
  PORT = process.env.PORT || 5000;

require("./models/User");
require("./services/passport");

mongoose.connect(keys.mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const app = express();

// Body parsing & CORS middleware

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({ credentials: true }));

// Session middleware

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey],
  })
);

app.use(express.static(`${__dirname}/client/public`));

// Passport middleware

app.use(passport.initialize());
app.use(passport.session());

// Routes

require("./routes/genRoutes")(app);
require("./routes/localRoutes")(app);
require("./routes/googleRoutes")(app);
require("./routes/facebookRoutes")(app);
require("./routes/twitterRoutes")(app);
require("./routes/quotesRoutes")(app);

// Serve static assets
if (process.env.NODE_ENV === "production") {
  const path = require("path");

  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendfile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
