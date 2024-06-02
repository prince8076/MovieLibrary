const mongoose = require("mongoose");

const favoriteMovieSchema = mongoose.Schema({
  movieId: { type: String, required: true }, // The ID of the movie (e.g., from OMDB API)
  title: { type: String, required: true },
  year: { type: String, required: true },
  poster: { type: String },
});

const listSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "User" },
    movies: [{ type: String }],
    favoriteMovies: [favoriteMovieSchema], // Array of favorite movies
    isPublic: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

const List = mongoose.model("List", listSchema);

module.exports = List;
