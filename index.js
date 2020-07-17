const express = require("express"),
  mongoose = require("mongoose"),
  bodyParser = require("body-parser"),
  cors = require("cors"),
  cookieSession = require("cookie-session"),
  passport = require("passport"),
  keys = require("./server/config/keys"),
  PORT = process.env.PORT || 5000;

require("./server/models/User");
require("./server/services/passport");

mongoose.connect(keys.mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const app = express();

// Body parsing & CORS middleware

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Session middleware

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey],
  })
);

// Passport middleware

app.use(passport.initialize());
app.use(passport.session());

// Routes

require("./server/routes/genRoutes")(app);
require("./server/routes/googleRoutes")(app);
require("./server/routes/facebookRoutes")(app);
require("./server/routes/twitterRoutes")(app);
require("./server/routes/quotesRoutes")(app);

// Serve static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  const path = require("path");

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
