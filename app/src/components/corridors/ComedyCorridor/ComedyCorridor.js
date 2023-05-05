import React from "react";
import { apiKey, comedy } from "../../../constants/constants";
import UseApi from "../../../hooks/useApi";
import Cards from "../../card/Cards";
import { StyledActionMoviesRow, StyledRow } from "../../card/StyledCard.styled";

const ComedyCorridor = () => {
  const { comedyMovies } = UseApi(
    `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${comedy}`
  );
  return (
    <StyledRow>
      <StyledActionMoviesRow>
        <Cards movies={comedyMovies} moviesDetails={comedyMovies} />
      </StyledActionMoviesRow>
    </StyledRow>
  );
};

export default ComedyCorridor;
