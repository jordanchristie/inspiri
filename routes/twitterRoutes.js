const express = require('express'),
      passport = require('passport'),
      app = express();

module.exports = (app) => {

    app.get('/auth/twitter', passport.authenticate('twitter'));

    app.get('/auth/twitter/callback', passport.authenticate('twitter', {
        successRedirect: '/dashboard',
        failureRedirect: '/'
    }));


}