const express = require('express'),
      passport = require('passport'),
      app = express();

module.exports = (app) => {

    app.use(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });

    app.get('/auth/facebook', passport.authenticate('facebook'))

    app.get('/auth/facebook/callback', passport.authenticate('facebook', {
        successRedirect: '/dashboard',
        failureRedirect: '/'
    }))

    
}