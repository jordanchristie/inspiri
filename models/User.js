const mongoose = require("mongoose"),
     { Schema } = mongoose,
     quoteSchema = require('./Quote');
      
const userSchema = new Schema({
    id: Number,
    fullName: String,
    firstName: String,
    avatar: String,
    savedQuotes: [quoteSchema]
}, {collection: 'users'});

module.exports = mongoose.model('user', userSchema);

