const mongoose = require("mongoose"),
  { Schema } = mongoose;

const quoteSchema = new Schema({
  quoteAuthor: { type: String, required: true },
  quoteText: { type: String, required: true },
  isSaved: { type: Boolean, required: true, default: true },
});

module.exports = quoteSchema;
