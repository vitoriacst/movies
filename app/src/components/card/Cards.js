import { useContext, useEffect, useState } from "react";
import { AiOutlineCheck } from "react-icons/ai";
// import { key } from '../configs/ApiKey';
import AppContext from "../../contexts/AppContext";
import UseApi from "../../hooks/useApi";
import { StyledCard, StyledMoviesRow } from "./StyledCard.styled";
import React from "react";
import MovieCarousel from "./MoviesCarousel";

const Cards = () => {
  const [moviesGenre, setMoviesGenre] = useState([]);
  const { productCart, setProductCart } = useContext(AppContext);
  const image = "https://image.tmdb.org/t/p/w500/";

  const { movies } = UseApi(
    `https://api.themoviedb.org/3/movie/popular?api_key=e843b62ccda89c4fc4880f2b669634d5&language=en-US`
  );

  const { moviesDetails } = UseApi(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=e843b62ccda89c4fc4880f2b669634d5`
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
    const takeItems = JSON.parse(localStorage.getItem("moviesData")) || [];
    const newTakeItems = [...takeItems, movies];
    localStorage.setItem("moviesData", JSON.stringify(newTakeItems));
    setProductCart(!productCart);
  }

  useEffect(
    (event) => {
      setMoviesGenre(findGenresById());
    },
    [movies]
  );

  const handleDragStart = (e) => e.preventDefault();
  return (
    <div>
      <MovieCarousel
        movies={movies}
        image={image}
        handleDragStart={handleDragStart}
      />
    </div>
  );
};

export default Cards;
