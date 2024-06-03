import React, { useState } from "react";
import "./movieSearch.css"; // Import the CSS file for movie search styling
import { useNavigate } from "react-router-dom";

const Movie = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState(""); // State to hold search term

  // Function to handle search term change
  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Function to handle search submission
  const handleSearchSubmit = async () => {
    if (searchTerm.trim() !== "") {
      const response = await fetch(
        `https://www.omdbapi.com/?s=${searchTerm}&apikey=8e0edd47`
      );
      const data = await response.json();
      navigate("/results", { state: { searchTerm, results: data.Search } });
    }
  };

  return (
    <div className="movie-search">
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearchTermChange}
        placeholder="Search movies..."
        className="search-input"
      />
      <button onClick={handleSearchSubmit} className="search-button">
        Search
      </button>
    </div>
  );
};

export default Movie;
