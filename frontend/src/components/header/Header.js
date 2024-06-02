import React, { useState } from "react";
import "../header/Header.css";
import { Link } from "react-router-dom";
import MovieSearch from "../movieSearch/movieSearch"; // Import the MovieSearch component

function Header({ user, setLoginUser }) {
  const [searchQuery, setSearchQuery] = useState(""); // State to track search query

  const handleLogout = () => {
    setLoginUser(null); // Clear user state on logout
    // Optionally clear tokens or user data from local storage
    // localStorage.removeItem("userToken");
  };

  const handleSearch = (event) => {
    // Update the search query state with user input
    setSearchQuery(event.target.value);
    // Perform search operations based on the searchQuery
    // You can pass the searchQuery to MovieSearch component or handle search directly here
    console.log("Search query:", event.target.value);
  };

  return (
    <div className="header">
      <div className="headerLeft">
        <Link to="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png"
            className="header_icon"
            alt="IMDB Logo"
          />
        </Link>
        {user && user._id && (
          <>
            <Link to="/movies/upcoming" className="headerLink">
              <span>Upcoming</span>
            </Link>
            <Link to="/movies/popular" className="headerLink">
              <span>Popular</span>
            </Link>
            <Link to="/movies/top_rated" className="headerLink">
              <span>Top Rated</span>
            </Link>
            <Link to="/watchlist" className="headerLink">
              <span>Watch List</span>
            </Link>
            <div className="btn-container">
              <Link to="/add" className="btn">
                <span>+ADD</span>
              </Link>
            </div>
          </>
        )}
      </div>
      <div className="headerRight">
        {user && user._id ? (
          <>
            {/* Pass handleSearch function to MovieSearch component */}
            <MovieSearch handleSearch={handleSearch} />
            <Link to="/" className="headerLink" onClick={handleLogout}>
              Logout
            </Link>
          </>
        ) : (
          <>
            <Link to="/login" className="headerLink">
              Login
            </Link>
            <Link to="/register" className="headerLink">
              Signup
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

export default Header;
