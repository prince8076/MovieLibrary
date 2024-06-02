import React from "react";
import { useLocation } from "react-router-dom";
import "./movieResult.css"; // Import the CSS file for results styling

const Results = () => {
  const location = useLocation();
  const { searchTerm, results } = location.state;

  return (
    <div className="results">
      <h2>Results for "{searchTerm}"</h2>
      <div className="movie-list">
        {results ? (
          results.map((movie) => (
            <div key={movie.imdbID} className="movie-item">
              <img src={movie.Poster} alt={movie.Title} />
              <h3>{movie.Title}</h3>
              <p>{movie.Year}</p>
            </div>
          ))
        ) : (
          <p>No results found</p>
        )}
      </div>
    </div>
  );
};

export default Results;
