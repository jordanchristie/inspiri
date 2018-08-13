const mongoose = require('mongoose'),
      { Schema } = mongoose;

const quoteSchema = new Schema({
    author: String,
    quote: String
});

module.exports = quoteSchema;