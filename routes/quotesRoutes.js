const express = require('express'),
      User = require('../models/User'),
      app = express();

module.exports = (app) => {
    
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