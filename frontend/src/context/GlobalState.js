// context/GlobalContext.js
import React, { useReducer, createContext, useEffect } from "react";
import AppReducer from "./AppReducer";
import axios from "axios"; // Import axios for API calls

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

  const addMovie = async (movie) => {
    try {
      dispatch({
        type: "ADD_MOVIE_TO_WATCHLIST",
        payload: movie,
      });
      // Make API call to add movie to database
      await axios.post("http://localhost:8000/api/addMovie", movie);
    } catch (err) {
      console.error("Error adding movie:", err);
    }
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
