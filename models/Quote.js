const mongoose = require('mongoose'),
      { Schema } = mongoose;

const quoteSchema = new Schema({
    author: String,
    quote: String,
    isSaved: Boolean
});

module.exports = quoteSchema;