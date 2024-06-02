import React from "react";

export default (state, action) => {
  switch (action.type) {
    case "ADD_MOVIE_TO_WATCHLIST":
      return {
        ...state,
        watchlist: [...state.watchlist, action.payload],
      };
    case "REMOVE_MOVIE_FROM_WATCH_LIST":
      return {
        ...state,
        watchlist: state.watchlist.filter(
          (movie) => movie.id !== action.payload
        ),
      };
    default:
      return state;
  }
};
