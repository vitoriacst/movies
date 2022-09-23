import React, { useEffect, useState } from 'react';
import { AiOutlineCheck } from 'react-icons/ai';
import { RiStarSmileLine } from 'react-icons/ri';
import Header from './Header';

const Cards = () => {
  const [movies, setMovies] = useState([]);
  const [moviesDetails, setMoviesDetails] = useState([]);
  const [moviesGenre, setMoviesGenre] = useState([]);
  const image = 'https://image.tmdb.org/t/p/w500/';

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=d90f0c5adbb7cb8e15dc685ed00cd306&language=en-US`
    )
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results);
      });
  }, []);

  function findGenresById() {
    const genres = [];
    movies.forEach((movie, index) => {
      moviesDetails.forEach((moviesGenre) => {
        const test = movie.genre_ids[0] === moviesGenre.id;
        if (test) {
          genres.push(moviesGenre.name);
        }
      });
    });
    return genres;
  }

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=d90f0c5adbb7cb8e15dc685ed00cd306`
    )
      .then((response) => response.json())
      .then((data) => {
        setMoviesDetails(data.genres);
      });
  }, []);

  useEffect(
    (event) => {
      setMoviesGenre(findGenresById());
    },
    [movies]
  );

  let value = Math.floor(Math.random() * 100) + 1;

  const findId = movies.map(
    (element) => element.genre_ids !== null && element.genre_ids[0]
  );
  //  console.log(findId);
  // [53, 14, 12, 28, 28, 16, 14, 28, 53, 16, 28, 53, 53, 28, 12, 27, 28, 16, 35, 16]

  const findGenres = moviesDetails.map((element) => {
    return element.id;
  });
  //[28, 12, 16, 35, 80, 99, 18, 10751, 14, 36, 27, 10402, 9648, 10749, 878, 10770, 53, 10752, 37]

  console.log(findGenresById());

  //  console.log(findGenres);
  return (
    <>
      <Header />
      <div className="flex flex-wrap gap-6 p-6 justify-center">
        {movies.map((element, index) => {
          return (
            <div className="flex" key={index}>
              <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                <img
                  src={`${image}${element.poster_path}`}
                  alt={element.title}
                  className="rounded-lg"
                />
                <div className="p-5">
                  <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {element.title}
                    </h5>
                  </a>
                  <div className="flex gap-2 mt-2">
                    <RiStarSmileLine className="mt-1" />
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      {element.vote_average}
                    </p>
                    <h1 className="font-mono ml-8">{moviesGenre[index]}</h1>
                  </div>
                  <div className="flex items-center mb-6">
                    <h1 className="font-bold">R${value}</h1>
                  </div>
                  <a
                    href="#"
                    className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-purple-500 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Adicionar
                    <svg
                      aria-hidden="true"
                      className="ml-2 -mr-1 w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <AiOutlineCheck />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Cards;
