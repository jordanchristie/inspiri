const mongoose = require("mongoose");
const { Schema } = mongoose;
const journalSchema = require("./Journal");
const quoteSchema = require("./Quote");

const userSchema = new Schema(
  {
    id: { type: Number, required: true },
    fullName: { type: String },
    firstName: { type: String },
    avatarUrl: { type: String },
    savedQuotes: [quoteSchema],
    journalEntries: [journalSchema],
  },
  { collection: "users" }
);

module.exports = mongoose.model("user", userSchema);
