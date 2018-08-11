const mongoose = require("mongoose"),
      Schema  = mongoose.Schema;
      
const userSchema = new Schema({
    google: {
        id: String,
        name: String
    },
    facebook: {
        id: String,
        name: String
    },
    twitter: {
        id: String,
        name: String
    },
    savedQuotes: []
});

const User = module.exports = mongoose.model('User', userSchema);

