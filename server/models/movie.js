const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    name: {
        type: String,
        required: 'This field is required!'
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: Array,
        required: true
    },
    year:{
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('Movie', movieSchema);