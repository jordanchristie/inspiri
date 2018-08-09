const mongoose = require("mongoose"),
      Schema  = mongoose.Schema;
      
const userSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        required: true    
    },
    savedQuotes: []
});

module.exports = mongoose.model('User', userSchema);

