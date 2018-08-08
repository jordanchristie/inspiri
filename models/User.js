const mongoose = require("mongoose"),
      Schema  = mongoose.Schema;
      
const userSchema = new Schema({
    id: {
        type: String,
        unique: true,
        required: true,    
    },

    name: {
        type: String,
        required: true,    
    },
    savedQuotes: []
});

module.exports = mongoose.model('User', userSchema);

