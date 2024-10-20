const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    title: String,
    director: String,
    genre: String,
    releaseDate: String,
    watched: Boolean,
});

module.exports = mongoose.model('Movie', movieSchema)