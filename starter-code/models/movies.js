const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      minlength: 1
    },
    genre: {
      type: String,
      required: true,
      minlength: 1
    },
    plot: {
      type: String,
      required: true,
      minlength: 1
    }
  }
);

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;