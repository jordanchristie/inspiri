const express = require('express'),
      passport = require('passport'),
      app = express();
    

module.exports = (app) => {

    app.get('/auth/google', passport.authenticate('google', {
        scope: ['email', 'profile']
    }));

    app.get('/auth/google/callback',
        passport.authenticate('google', { failureRedirect: '/'}),
        (req, res) => res.redirect('/dashboard')
    );

}