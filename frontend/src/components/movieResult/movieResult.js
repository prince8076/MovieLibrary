import React from "react";
import { useLocation } from "react-router-dom";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "./movieResult.css";

const Results = () => {
  const location = useLocation();
  const { searchTerm, results } = location.state;

  return (
    <div className="results">
      <h2>Results for "{searchTerm}"</h2>
      <div className="movie-list">
        {results ? (
          results.map((movie) => (
            <div key={movie.id} className="movie-card">
              {movie ? (
                <>
                  <img
                    className="movie-card__img"
                    src={movie.Poster}
                    alt={movie.Title}
                  />
                  <div className="movie-card__overlay">
                    <div className="movie-card__title">{movie.Title}</div>
                    <div className="movie-card__runtime">
                      {movie.Year}
                      <span className="movie-card__rating">
                        {movie.imdbRating}
                        <i className="fas fa-star"></i>
                      </span>
                    </div>
                    <div className="movie-card__description">{movie.Plot}</div>
                  </div>
                </>
              ) : (
                <SkeletonTheme color="#202020" highlightColor="#444">
                  <div className="skeleton-card">
                    <Skeleton height={300} duration={2} />
                  </div>
                </SkeletonTheme>
              )}
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
