const express = require('express');
const cors = require('cors');
const PORT = 8000;
const userRoutes = require('./routes/user');
const {connectMongoDB} = require('./connection')

const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

// Connect to the database
const MONGO_URI = "mongodb+srv://rahul:1234@movie.dy4lsuv.mongodb.net/?retryWrites=true&w=majority&appName=movie";
connectMongoDB(MONGO_URI);

// Routes
app.use('/', userRoutes);
// app.post('/login', (req, res) => {
//     res.send('Hello login');
// });
// app.post('/signup', (req, res) => {
//     res.send('Hello signup');
// });

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
