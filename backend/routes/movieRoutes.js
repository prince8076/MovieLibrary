const express = require("express");
const router = express.Router();
const Movie = require("../modles/Movie"); // Import your Movie model

// Add movie to watchlist
router.post("/addMovie", async (req, res) => {
  try {
    const { title, release_date, poster_path } = req.body;
    // Create a new movie object
    const newMovie = new Movie({ title, release_date, poster_path });
    // Save the movie to the database
    await newMovie.save();
    res.status(201).json({ message: "Movie added successfully" });
  } catch (err) {
    console.error("Error adding movie:", err);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
