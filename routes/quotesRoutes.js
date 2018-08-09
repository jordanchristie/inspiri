const express = require('express'),
      User = require('../models/User'),
      app = express();

module.exports = (app) => {
    app.post('/api/saved', (req, res, next) => {
        const user = new User();

        User.save()
            .then(res => res.json())
            .catch(err => console.log(err))
    })

    app.delete('/api/saved/:id', (req, res, next) => {
        User.findOneAndRemove({ _id: req.params.id})
            .exec()
            .then(user => res.json(user))

        User.save()
            .then(() => res.json())
    })
}