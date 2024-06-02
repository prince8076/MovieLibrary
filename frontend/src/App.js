import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/home/home";
import MovieList from "./components/movieList/movieList";
import Movie from "./components/movieDetail/movieDetail";
import Login from "./components/login/login";
import Register from "./components/signup/signup";
import { useState } from "react";
import MovieSearch from "./components/movieSearch/movieSearch";
import MovieResult from "./components/movieResult/movieResult";

function App() {
  const [user, setLoginUser] = useState(null); // Initialize with null

  return (
    <div className="App">
      <Router>
        <Header user={user} setLoginUser={setLoginUser} />{" "}
        {/* Pass user and setLoginUser to Header */}
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
          <Route path="/search" element={<MovieSearch />} />
          <Route path="/" element={<Movie />} />
          <Route path="/results" element={<MovieResult />} />
          <Route path="*" element={<h1>404</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
