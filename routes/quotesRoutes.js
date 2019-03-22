const express = require('express'),
      User = require('../models/User'),
      fetch = require('node-fetch')
      app = express();

module.exports = (app) => {

    app.get('/api/quotes', async (req, res) => {
        const result = await fetch('https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json&lang=en')
        const json = await result.json();
        
        res.send(json)
    })
    
    // Add Quote
    app.post('/api/saved', (req, res) => {
        const {author, quote} = req.body;
        
        const newQuote = User.findOne({ id: req.user.id }, (err, user) => {
            user.savedQuotes.push({
                author,
                quote,
                isSaved: true
            });
            user.save();
        });
    
    })

    // Remove Quote
    app.delete('/api/saved/:id', (req, res, next) => {

        const user = User.findOne({ _id: req.user._id}, (err, user) => {
            console.log(req.params.id)
            user.savedQuotes.id(req.params.id).remove();

            user.save();
        });
    })
}