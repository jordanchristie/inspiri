const mongoose = require("mongoose"),
      Schema  = mongoose.Schema;
      
const userSchema = new Schema({
    googleId: String,
    name: String,
    savedQuotes: []
});

module.exports = mongoose.model('users', userSchema);

