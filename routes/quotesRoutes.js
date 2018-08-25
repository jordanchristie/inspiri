const express = require('express'),
      User = require('../models/User'),
      app = express(),
      User = require('../models/User');

module.exports = (app) => {
    
    app.post('/api/saved', (req, res) => {
        const {author, quote} = req.body;
        console.log(req)
        
        const newQuote = User.findOne({ id: req.user.id }, (err, user) => {
            user.savedQuotes.push({
                author,
                quote,
                isSaved: true
            });
            user.save();
        });
        
    })

    app.delete('/api/saved/:id', (req, res, next) => {
        User.findOneAndRemove({ _id: req.params.id})
            .exec()
            .then(user => res.json(user))

        User.save()
            .then(() => res.json())
    })
}