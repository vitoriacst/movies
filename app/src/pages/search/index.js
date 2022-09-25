import React, { useContext, useState } from 'react';
import { AiOutlineCheck } from 'react-icons/ai';
import { RiStarSmileLine } from 'react-icons/ri';
import Header from '../../components/Header';
import AppContext from '../../contexts/AppContext';
import UseApi from '../../hooks/useApi';

const Search = () => {
  const [movies, setMovies] = useState('');
  const { productCart, setProductCart } = useContext(AppContext);
  const image = 'https://image.tmdb.org/t/p/w500/';

  const { searchMovies, setSearchMovies } = UseApi(
    `https://api.themoviedb.org/3/search/movie?api_key=d90f0c5adbb7cb8e15dc685ed00cd306&language=en-US&page=1&include_adult=false?&query=%27%27`
  );

  const { findByTerm } = UseApi(
    `https://api.themoviedb.org/3/search/movie?api_key=d90f0c5adbb7cb8e15dc685ed00cd306&language=en-US&page=1&include_adult=false?&query=%27%27`
  );

  const handleChange = ({ target: { value } }) => {
    if (!value) {
      setSearchMovies(findByTerm);
      return;
    }
    setSearchMovies(
      searchMovies.filter((movie) => {
        return movie.title.toLowerCase().includes(value.toLowerCase());
      })
    );
  };

  let value = Math.floor(Math.random() * 100) + 1;

  function handleClick(element) {
    const movies = { name: element.title, value };
    const takeItems = JSON.parse(localStorage.getItem('moviesData')) || [];
    const newTakeItems = [...takeItems, movies];
    localStorage.setItem('moviesData', JSON.stringify(newTakeItems));
    setProductCart(!productCart);
  }

  return (
    <>
      <Header />

      <form className="mt-8 p-4">
        <label
          for="search"
          class="mb-2 text-sm font-medium text-white sr-only dark:text-white"
        >
          Pesquise por um filme
        </label>
        <div class="relative">
          <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              class="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <input
            type="search"
            id="search"
            class="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search"
            required
            onChange={handleChange}
          />
          <button
            type="submit"
            class="text-white absolute right-2.5 bottom-2.5 bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            Buscar
          </button>
        </div>
      </form>
      <div className="flex flex-wrap gap-6 p-6 justify-center">
        <section className="flex flex-wrap gap-6 p-6 justify-center">
          {searchMovies.map((movie, index) => {
            return (
              <div className="flex" key={index}>
                <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                  <img
                    src={`${image}${movie.poster_path}`}
                    alt={movie.title}
                    className="rounded-lg"
                  />
                  <div className="p-5">
                    <a href="#">
                      <h5
                        className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
                        id="title"
                      >
                        {movie.title}
                      </h5>
                    </a>
                    <div className="flex gap-2 mt-2">
                      <RiStarSmileLine className="mt-1" />
                      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        {movie.vote_average}
                      </p>
                    </div>
                    <div className="flex items-center mb-6">
                      <h1 className="font-bold">R${value}</h1>
                    </div>
                    <button
                      type="button"
                      className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-black rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 transition-colors"
                      onClick={() => handleClick(movie)}
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
        </section>
      </div>
    </>
  );
};

export default Search;
