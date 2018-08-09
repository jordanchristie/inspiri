const express = require('express'),
      mongoose = require('mongoose'),
      bodyParser = require('body-parser'),
      cors = require('cors'),
      cookieSession = require('cookie-session'),
      passport = require('passport'),
      keys = require('./config/keys'),
      PORT = 5000;

require('./models/User');
require('./services/passport');
require('./services/googlePassport');
require('./services/facebookPassport');

mongoose.connect(keys.mongoURI, { useNewUrlParser: true});

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());

app.use(
    cookieSession({
          maxAge: 30 * 24 * 60 * 60 * 1000,
          keys: [keys.cookieKey]
    })
);

app.use(passport.initialize());
app.use(passport.session());

require('./routes/genRoutes')(app);
require('./routes/googleRoute')(app);
require('./routes/facebookRoute')(app);
// const path = require('path');

// app.get('*', (req, res) => {
//     res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
// })

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));