import React, { useEffect, useState } from 'react';
import { AiOutlineCheck } from 'react-icons/ai';
import { RiStarSmileLine } from 'react-icons/ri';
import Header from '../components/Header';

const Cards = () => {
  const [movies, setMovies] = useState([]);
  const [moviesDetails, setMoviesDetails] = useState([]);
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

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=d90f0c5adbb7cb8e15dc685ed00cd306`
    )
      .then((response) => response.json())
      .then((data) => {
        setMoviesDetails(data.genres);
      });
  }, []);

  let value = Math.floor(Math.random() * 100) + 1;

   const findId = movies.map((element) =>
    element.genre_ids !== null && element.genre_ids[0]
);
   console.log(findId);

   const findGenres = moviesDetails.map((element) =>{
     return element.id
   } );

  //  const some = findGenres.filter((element)=> {
  //   return element === findId
  //  }
  //  )
  //  console.log(some);
  console.log(findGenres);
  return (
    <>
      <Header />
      <div className="flex flex-wrap gap-6 p-6 justify-center">
        {movies.map((element,i) => {
          return (
            <div className="flex" key={i}>
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
                  <div className="flex gap-2">
                    <RiStarSmileLine className="mt-1" />
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      {element.vote_average}
                    </p>
                  </div>
                  <h1 className="font-bold">R${value}</h1>
                  <h1 className="font-bold">{findGenres}</h1>
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
