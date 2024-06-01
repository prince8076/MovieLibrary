import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./home.css";
import { Link } from "react-router-dom";
import MovieList from "../../components/movieList/movieList";

const Home = () => {
  const [popularMovie, setPopularMovie] = useState([]);

  useEffect(() => {
    // fetch("https://www.omdbapi.com/?s=tum&apikey=9cf122f")
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=80727b75f4d61d5c2f64f67ac61848dc"
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.results) {
          setPopularMovie(data.results);
        }
      })
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  return (
    <div>
      <div className="poster">
        <Carousel
          showThumbs={false}
          infiniteLoop={true}
          autoPlay={true}
          transitionTime={3}
          showStatus={false}
        >
          {popularMovie.map((movie) => (
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to={`/movie/${movie.id}`}
            >
              <div className="posterImage">
                <img
                  src={`https://image.tmdb.org/t/p/original${
                    movie && movie.backdrop_path
                  }`}
                  alt={""}
                />
              </div>
              <div className="posterImage_overlay">
                <div className="posterImage_title">
                  {movie ? movie.original_title : ""}
                </div>
                <div className="posterImage_runtime">
                  {movie ? movie.release_date : ""}
                  <span className="posterImage_rating">
                    {movie ? movie.vote_average : ""}
                    <i className="fas fa-star"></i>
                  </span>
                </div>
                <div className="posterImage_description">
                  {movie ? movie.overview : ""}
                </div>
              </div>
            </Link>
          ))}
        </Carousel>
        <MovieList />
      </div>
    </div>
  );
};

export default Home;
