import React, { useContext, useEffect, useState } from 'react';
import { AiOutlineCheck } from 'react-icons/ai';
import AppContext from '../contexts/AppContext';
import UseApi from '../hooks/useApi';

const Cards = () => {
  const [moviesGenre, setMoviesGenre] = useState([]);
  const { productCart, setProductCart } = useContext(AppContext);
  const image = 'https://image.tmdb.org/t/p/w500/';

  const { movies } = UseApi(
    `https://api.themoviedb.org/3/movie/popular?api_key=d90f0c5adbb7cb8e15dc685ed00cd306&language=en-US`
  );

  const { moviesDetails } = UseApi(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=d90f0c5adbb7cb8e15dc685ed00cd306`
  );

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

  let value = Math.floor(Math.random() * 100) + 1;

  function handleClick(element) {
    const movies = { name: element.title, value };
    const takeItems = JSON.parse(localStorage.getItem('moviesData')) || [];
    const newTakeItems = [...takeItems, movies];
    localStorage.setItem('moviesData', JSON.stringify(newTakeItems));
    setProductCart(!productCart);
  }

  useEffect(
    (event) => {
      setMoviesGenre(findGenresById());
    },
    [movies]
  );

  return (
    <>
      <div className="flex flex-wrap gap-6 p-6 justify-center">
        {movies.map((element, index) => {
          return (
            <div className="flex" key={index}>
              <div className="max-w-sm backdrop-blur-sm bg-white rounded-lg border border-black shadow-md dark:bg-gray-800 dark:border-gray-700">
                <img
                  src={`${image}${element.poster_path}`}
                  alt={element.title}
                  className="rounded-lg"
                />
                <div className="p-5">
                  <a href="#">
                    <h5
                      className="mb-2 text-2xl font-extrabold tracking-tight text-green-600 dark:text-white"
                      id="title"
                    >
                      {element.title}
                    </h5>
                  </a>
                  <div className="flex gap-2 mt-2">
                    <div className="rating">
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                        checked
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                    </div>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      {element.vote_average}
                    </p>
                    <h1 className="font-mono ml-8">{moviesGenre[index]}</h1>
                  </div>
                  <div className="flex items-center mb-6">
                    <h1 className="font-bold">R${value}</h1>
                  </div>
                  <button
                    type="button"
                    className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-black rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 transition-colors"
                    onClick={() => handleClick(element)}
                    value={movies.value}
                    name={movies.title}
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
                  </button>
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
