const mongoose = require("mongoose");
const { Schema } = mongoose;

const journalSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  date: { type: Date, required: true, default: Date.now },
});

module.exports = journalSchema;
