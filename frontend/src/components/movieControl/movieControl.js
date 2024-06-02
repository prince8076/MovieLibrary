import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
export default function MovieControl({ movie, type }) {
  const { removeMovieFromWatchList } = useContext(GlobalContext);
  return (
    <div className="inner-card-controls">
      {type === "watchlist" && (
        <>
          <button
            className="ctrl-btn"
            onClick={() => removeMovieFromWatchList(movie.id)}
          >
            <i className="fas fa-trash-alt"></i>
          </button>
        </>
      )}
    </div>
  );
}
