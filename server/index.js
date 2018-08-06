const express = require('express'),
      mongoose = require('mongoose'),
      bodyParser = require('body-parser'),
      cookieSession = require('cookie-session'),
      passport = require('passport'),
      keys = require('./config/keys'),
      PORT = 8000;

require('./models/User');
require('./services/googlePassport');

mongoose.connect(keys.mongoURI, { useNewUrlParser: true});

const app = express();

app.use(bodyParser.json());

app.use(
    cookieSession({
          maxAge: 30 * 24 * 60 * 60 * 1000,
          keys: [keys.cookieKey]
    })
);

app.use(passport.initialize());
app.use(passport.session());

require('./routes/googleRoute')(app);

// const path = require('path');

// app.get('*', (req, res) => {
//     res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
// })

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));