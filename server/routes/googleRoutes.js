const express = require('express'),
      passport = require('passport'),
      app = express();
    

module.exports = (app) => {

    app.get('/auth/google', passport.authenticate('google', {
        scope: ['email', 'profile']
    }), (req, res) => console.log(req));

    app.get('/auth/google/callback', passport.authenticate('google', {
        successRedirect: '/dashboard',
        failureRedirect: '/',
        }
    ));

}