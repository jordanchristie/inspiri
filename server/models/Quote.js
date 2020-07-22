const mongoose = require("mongoose"),
  { Schema } = mongoose;

const quoteSchema = new Schema({
  author: { type: String, required: true },
  quote: { type: String, required: true },
  isSaved: { type: Boolean, required: true, default: true },
});

module.exports = quoteSchema;
