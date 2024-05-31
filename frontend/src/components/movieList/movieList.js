// import React, { useEffect, useState, useCallback } from 'react';
// import Cards from '../card/card';
// import "./movieList.css";
// import { useParams } from 'react-router-dom';

// const MovieList = () => {
//   const [movieList, setMovieList] = useState([]);
//   const { type } = useParams();

//   const getData = useCallback(() => {
//     fetch(`https://api.themoviedb.org/3/movie/${type?type:"popular"}?api_key=80727b75f4d61d5c2f64f67ac61848dc`)
//       .then(res => res.json())
//       .then(data => {
//         if (data.results) {
//           setMovieList(data.results);
//         }
//       })
//       .catch(err => console.error("Error fetching data:", err));
//   }, [type]); // No dependencies

//   useEffect(() => {
//     getData();
//   }, [getData, type]);

//   return (
//     <div className='movie_list'>
//       <h2 className='list_title'>{(type ? type : "POPULAR").toUpperCase()}</h2>
//       <div className='list_cards'>
//         {movieList.map(movie => (
//           <Cards key={movie.id} movie={movie} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default MovieList;


// import React, { useEffect, useState } from "react";
// import "./movieList.css";
// import { useParams } from "react-router-dom";
// import Cards from "../card/card";

// const MovieList = () => {
//     const [movieList, setMovieList] = useState([]);
//     const {type} = useParams();

//     useEffect(() => {
//         getData(type); // eslint-disable-next-line react-hooks/exhaustive-deps
//     }, []);

//     const getData = (type) => {
//         fetch(`https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=80727b75f4d61d5c2f64f67ac61848dc`)
//             .then(res => {
//                 if (!res.ok) {
//                     throw new Error("Network response was not ok");
//                 }
//                 return res.json();
//             })
//             .then(data => setMovieList(data.results))
//             .catch(error => console.error('Error fetching data:', error));
//     };

//     return (
//         <div className="movie__list">
//             <h2 className="list__title">{(type ? type : "POPULAR").toUpperCase()}</h2>
//             <div className="list__cards">
//                 {
//                     movieList.map(movie => (
//                         <Cards key={movie.id} movie={movie} />
//                     ))
//                 }
//             </div>
//         </div>
//     );
// };

// export default MovieList;


import React, {useEffect, useState} from "react"
import "./movieList.css"
import { useParams } from "react-router-dom"
import Cards from "../card/card"

const MovieList = () => {
    
    const [movieList, setMovieList] = useState([])
    const {type} = useParams()

    useEffect(() => {
        getData()
    }, [])

    useEffect(() => {
        getData()
    }, [type])

    const getData = () => {
      fetch(`https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=80727b75f4d61d5c2f64f67ac61848dc`)
        .then(res => res.json())
        .then(data => setMovieList(data.results))
    }

    return (
        <div className="movie__list">
            <h2 className="list__title">{(type ? type : "POPULAR").toUpperCase()}</h2>
            <div className="list__cards">
                {
                    movieList.map(movie => (
                        <Cards movie={movie} />
                    ))
                }
            </div>
        </div>
    )
}

export default MovieList