import React, { useContext } from "react";
import "./resultCard.css";
import { GlobalContext } from "../../context/GlobalState";

const ResultCard = ({ movie }) => {
  const { addMovie, watchlist } = useContext(GlobalContext);
  let storeMovie = watchlist.find((ele) => ele.id === movie.id);
  const watchlistDisable = storeMovie ? true : false;

  return (
    <div className="result-card">
      <div className="poster-wrapper">
        {movie.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={`${movie.title} Poster`}
          />
        ) : (
          <div className="filler-poster"></div>
        )}
      </div>
      <div className="info">
        <h3 className="title">{movie.title}</h3>
        <h4 className="release-date">
          {movie.release_date ? movie.release_date.substring(0, 4) : "-"}
        </h4>
      </div>
      <div className="controls">
        <button
          className="btn"
          disabled={watchlistDisable}
          onClick={() => addMovie(movie)}
        >
          {" "}
          Add to Watchlist
        </button>
      </div>
    </div>
  );
};

export default ResultCard;
