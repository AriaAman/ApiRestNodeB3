const mongoose = require('mongoose');

const coursSchema = new mongoose.Schema({
    label:{
        type: String,
        require: [true, 'Entrez un titre !'],
        trim: true
    },

},{
    timestamps: {
        createdAt: "created_at",
        updateAt: "update_at"
    }
}); 

module.exports = mongoose.model('Cours', coursSchema);