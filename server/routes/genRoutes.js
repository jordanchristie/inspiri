const express = require('express'),
      passport = require('passport'),
      app = express(),
      User = require('../models/User');

module.exports = (app) => {

    app.use(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });

    app.get('/api/user', (req, res) => {
        res.send(req.user)
    });

    app.get('/api/logout', (req, res) => {
         req.logout();
         res.redirect('/');
    })

    app.post('/api/saved', (req, res) => {
        const {author, quote} = req.body;
        
        const newQuote = User.findOne({ id: req.user.id }, (err, user) => {
            user.savedQuotes.push({
                author,
                quote
            });
            user.save();
        });


    })

}