const mongoose = require("mongoose"),
     { Schema } = mongoose;
      
const userSchema = new Schema({
    id: Number,
    fullName: String,
    firstName: String,
    avatar: String,
    savedQuotes: {
        type: Array,
        default: []
    }
}, {collection: 'users'});

module.exports = mongoose.model('user', userSchema);

