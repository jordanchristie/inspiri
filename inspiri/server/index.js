const express = require('express'),
      bodyParser = require('body-parser'),
      PORT = 5000,
      app = express();

app.get('/', (req, res) => {
    res.send('It works boi!');
})

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));