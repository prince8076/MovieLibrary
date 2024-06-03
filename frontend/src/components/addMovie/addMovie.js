import React, { useState } from "react";
import "./addMovie.css";
import ResultCard from "../resultCard/resultCard";

const AddMovie = () => {
  const [movieTitle, setMovieTitle] = useState(""); // State to track the movie title
  const [results, setResults] = useState([]);

  const handleInputChange = (event) => {
    setMovieTitle(event.target.value);
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=80727b75f4d61d5c2f64f67ac61848dc&language=en-US&page=1&include_adult=false&query=${event.target.value}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (!data.error) {
          setResults(data.results);
        } else {
          setResults([]);
        }
      });
  };

  return (
    <div className="add-page">
      <div className="container">
        <div className="add-content">
          <div className="input-wrapper">
            <input
              type="text"
              value={movieTitle}
              onChange={handleInputChange}
              placeholder="Movie Title"
            />
          </div>
          {results.length > 0 && (
            <ul className="results">
              {results.map((movie) => (
                <li key={movie.id}>
                  <ResultCard movie={movie} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddMovie;
