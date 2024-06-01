// Header.js

import React from "react";
import "../header/Header.css";
import { Link } from "react-router-dom";

function Header({ user, setLoginUser }) {
  const handleLogout = () => {
    setLoginUser(null); // Clear user state on logout
    // Optionally clear tokens or user data from local storage
    // localStorage.removeItem("userToken");
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
        <Link to="/movies/upcoming" style={{ textDecoration: "none" }}>
          <span>Upcoming</span>
        </Link>
        <Link to="/movies/popular" style={{ textDecoration: "none" }}>
          <span>Popular</span>
        </Link>
        <Link to="/movies/top_rated" style={{ textDecoration: "none" }}>
          <span>Top Rated</span>
        </Link>
      </div>
      <div className="headerRight">
        {user && user._id ? (
          <button onClick={handleLogout} className="logoutButton">
            Logout
          </button>
        ) : (
          <>
            <Link to="/login" style={{ textDecoration: "none" }}>
              <span>Login</span>
            </Link>
            <Link to="/register" style={{ textDecoration: "none" }}>
              <span>Signup</span>
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

export default Header;
