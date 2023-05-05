import React, { useContext, useState } from "react";
import { action, apiKey, romance } from "../../../constants/constants";
import UseApi from "../../../hooks/useApi";
import Cards from "../../card/Cards";
import { StyledActionMoviesRow, StyledRow } from "../../card/StyledCard.styled";

const RomanceCorridor = () => {
  const { romanceMovies } = UseApi(
    `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${romance}`
  );

  return (
    <StyledRow>
      <StyledActionMoviesRow>
        <Cards movies={romanceMovies} moviesDetails={romanceMovies} />
      </StyledActionMoviesRow>
    </StyledRow>
  );
};

export default RomanceCorridor;
