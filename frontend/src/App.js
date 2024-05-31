import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/home/home.js";
import MovieList from "./components/movieList/movieList.js";
import Movie from "./components/movieDetail/movieDetail.js";
import Login from "./components/login/login.js";
import { useState } from "react";
import Register from "./components/signup/signup.js";

function App() {
  const [user, setLoginUser] = useState({});

  return (
    <div className="App">
      <Router>
        <Header /> {/* Include the Header component here */}
        <Routes>
          <Route
            path="/"
            element={
              user && user._id ? (
                <Home setLoginUser={setLoginUser} />
              ) : (
                <Login setLoginUser={setLoginUser} />
              )
            }
          />
          <Route
            path="/login"
            element={<Login setLoginUser={setLoginUser} />}
          />
          <Route path="/register" element={<Register />} />
          <Route path="/movie/:id" element={<Movie />} />
          <Route path="/movies/:type" element={<MovieList />} />
          <Route path="*" element={<h1>404</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
