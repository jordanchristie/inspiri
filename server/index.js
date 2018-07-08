const express = require('express'),
      mongoose = require('mongoose'),
      bodyParser = require('body-parser'),
      cookieSession = require('cookie-session'),
      keys = require('./config/keys'),
      PORT = 5000,
      app = express();

mongoose.connect(keys.mongoURI);
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('It works boi!');
})

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));