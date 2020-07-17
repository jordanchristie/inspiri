const express = require('express'),
      passport = require('passport'),
      app = express();

module.exports = (app) => {

    app.get('/auth/facebook', passport.authenticate('facebook'));

    app.get('/auth/facebook/callback', 
        passport.authenticate('facebook', { failureRedirect: '/' }),
        (req, res) => res.redirect('/dashboard')    
    );

}