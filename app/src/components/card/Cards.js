import { useContext, useEffect, useState } from "react";
import { AiOutlineCheck } from "react-icons/ai";
// import { key } from '../configs/ApiKey';
import AppContext from "../../contexts/AppContext";
import { StyledCard, StyledCardImage } from "./StyledCard.styled";
import React from "react";

const Cards = ({ movies, moviesDetails }) => {
  const [moviesGenre, setMoviesGenre] = useState([]);
  const { productCart, setProductCart } = useContext(AppContext);
  const image = "https://image.tmdb.org/t/p/w500/";

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

  const value = Math.floor(Math.random() * 100) + 1;

  const handleClick = (element) => {
    const movies = { name: element.title, value };
    const takeItems = JSON.parse(localStorage.getItem("moviesData")) || [];
    const newTakeItems = [...takeItems, movies];
    localStorage.setItem("moviesData", JSON.stringify(newTakeItems));
    setProductCart(!productCart);
  };

  useEffect(
    (event) => {
      setMoviesGenre(findGenresById());
    },
    [movies]
  );
  return (
    <>
      {movies.map((movie, index) => {
        return (
          <StyledCard key={index}>
            <StyledCardImage src={`${image}${movie.poster_path}`} />
          </StyledCard>
        );
      })}
    </>
  );
};

export default Cards;
