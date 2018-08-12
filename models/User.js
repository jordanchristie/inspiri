const mongoose = require("mongoose"),
     { Schema } = mongoose;
      
const userSchema = new Schema({
    id: Number,
    name: String,
    savedQuotes: []
}, {collection: 'users'});

module.exports = mongoose.model('user', userSchema);

