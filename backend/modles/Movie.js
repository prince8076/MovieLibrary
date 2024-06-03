// models/Movie.js
const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  release_date: {
    type: Date,
    required: true,
  },
  poster_path: {
    type: String,
    required: true,
  },
  isPublic: {
    type: Boolean,
    default: true, // Default value is true (public)
  },
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
