import React, { useReducer, createContext, useEffect } from "react";
import AppReducer from "./AppReducer";
import { json } from "react-router-dom";

// Initial state
const initialState = {
  watchlist: localStorage.getItem("watchlist")
    ? JSON.parse(localStorage.getItem("watchlist"))
    : [],
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(state.watchlist));
  }, [state]);

  const addMovie = (movie) => {
    dispatch({
      type: "ADD_MOVIE_TO_WATCHLIST",
      payload: movie,
    });
  };
  const removeMovieFromWatchList = (id) => {
    dispatch({
      type: "REMOVE_MOVIE_FROM_WATCH_LIST",
      payload: id,
    });
  };

  return (
    <GlobalContext.Provider
      value={{ watchlist: state.watchlist, addMovie, removeMovieFromWatchList }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
