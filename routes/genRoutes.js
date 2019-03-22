const express = require('express'),
      passport = require('passport'),
      app = express();

module.exports = (app) => {

    app.use(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });

    app.get('/api/user', (req, res) => {
        res.send(req.user)
    })

    app.get('/api/logout', (req, res) => {
         req.logout();
         res.redirect('/');
    })

}