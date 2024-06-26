const express = require("express");
const cors = require("cors");
const PORT = 8000;
const userRoutes = require("./routes/user");
const { connectMongoDB } = require("./connection");
const movieRoutes = require("./routes/movieRoutes");

const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

// Connect to the database
const MONGO_URI =
  "mongodb+srv://rahul:1234@movie.dy4lsuv.mongodb.net/?retryWrites=true&w=majority&appName=movie";
connectMongoDB(MONGO_URI);

// Routes
app.use("/", userRoutes);

// Routes
app.use("/api", movieRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
