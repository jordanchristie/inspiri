const express = require('express'),
      mongoose = require('mongoose'),
      bodyParser = require('body-parser'),
      cors = require('cors'),
      cookieSession = require('cookie-session'),
      passport = require('passport'),
      keys = require('./config/keys'),
      PORT = process.env.PORT || 5000;

require('./models/User');
require('./services/passport');


mongoose.connect(keys.mongoURI, { useNewUrlParser: true });

const app = express();

// Body parsing & CORS middleware

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Session middleware

app.use(
    cookieSession({
          maxAge: 30 * 24 * 60 * 60 * 1000,
          keys: [keys.cookieKey]
    })
);

// Passport middleware

app.use(passport.initialize());
app.use(passport.session());

// Routes

require('./routes/genRoutes')(app);
require('./routes/googleRoutes')(app);
require('./routes/facebookRoutes')(app);
require('./routes/twitterRoutes')(app);
require('./routes/quotesRoutes')(app);
const path = require('path');

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(__dirname + '/app/build'));
    
    app.get('*', (req, res) => {
      res.sendFile(__dirname + '/app/build/index.html');
    });
  }

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));