import React, { useEffect, useState } from "react";
import "./movieDetail.css";
import { useParams } from "react-router-dom";

const Movie = () => {
    const [currentMovieDetail, setMovie] = useState();
    const { id } = useParams();

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=80727b75f4d61d5c2f64f67ac61848dc`);
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const data = await response.json();
                setMovie(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        getData();
        window.scrollTo(0, 0);
    }, [id]);

    return (
        <div className="movie">
            {currentMovieDetail && (
                <>
                    <div className="movie__intro">
                        <img className="movie__backdrop" src={`https://image.tmdb.org/t/p/original${currentMovieDetail.backdrop_path}`} alt="Backdrop" />
                    </div>
                    <div className="movie__detail">
                        <div className="movie__detailLeft">
                            <div className="movie__posterBox">
                                <img className="movie__poster" src={`https://image.tmdb.org/t/p/original${currentMovieDetail.poster_path}`} alt="Poster" />
                            </div>
                        </div>
                        <div className="movie__detailRight">
                            <div className="movie__detailRightTop">
                                <div className="movie__name">{currentMovieDetail.original_title}</div>
                                <div className="movie__tagline">{currentMovieDetail.tagline}</div>
                                <div className="movie__rating">
                                    {currentMovieDetail.vote_average} <i className="fas fa-star" />
                                    <span className="movie__voteCount">({currentMovieDetail.vote_count} votes)</span>
                                </div>
                                <div className="movie__runtime">{currentMovieDetail.runtime} mins</div>
                                <div className="movie__releaseDate">Release date: {currentMovieDetail.release_date}</div>
                                <div className="movie__genres">
                                    {currentMovieDetail.genres.map(genre => (
                                        <span key={genre.id} className="movie__genre">{genre.name}</span>
                                    ))}
                                </div>
                            </div>
                            <div className="movie__detailRightBottom">
                                <div className="synopsisText">Synopsis</div>
                                <div>{currentMovieDetail.overview}</div>
                            </div>
                        </div>
                    </div>
                    <div className="movie__links">
                        <div className="movie__heading">Useful Links</div>
                        {currentMovieDetail.homepage && (
                            <a href={currentMovieDetail.homepage} target="_blank" rel="noreferrer" style={{textDecoration: "none"}}>
                                <p><span className="movie__homeButton movie__Button">Homepage <i className="newTab fas fa-external-link-alt"></i></span></p>
                            </a>
                        )}
                        {currentMovieDetail.imdb_id && (
                            <a href={`https://www.imdb.com/title/${currentMovieDetail.imdb_id}`} target="_blank" rel="noreferrer" style={{textDecoration: "none"}}>
                                <p><span className="movie__imdbButton movie__Button">IMDb <i className="newTab fas fa-external-link-alt"></i></span></p>
                            </a>
                        )}
                    </div>
                    <div className="movie__heading">Production companies</div>
                    <div className="movie__production">
                        {currentMovieDetail.production_companies.map(company => (
                            <div key={company.id} className="productionCompanyImage">
                                {company.logo_path && (
                                    <>
                                        <img className="movie__productionComapany" src={`https://image.tmdb.org/t/p/original${company.logo_path}`} alt={company.name} />
                                        <span>{company.name}</span>
                                    </>
                                )}
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default Movie;

