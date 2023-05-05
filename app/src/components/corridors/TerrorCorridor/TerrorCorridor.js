import React from "react";
import { apiKey, terror } from "../../../constants/constants";
import UseApi from "../../../hooks/useApi";
import Cards from "../../card/Cards";
import { StyledActionMoviesRow, StyledRow } from "../../card/StyledCard.styled";

const TerrorCorridor = () => {
  const { terrorMovies } = UseApi(
    `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${terror}`
  );
  return (
    <StyledRow>
      <StyledActionMoviesRow>
        <Cards movies={terrorMovies} moviesDetails={terrorMovies} />
      </StyledActionMoviesRow>
    </StyledRow>
  );
};

export default TerrorCorridor;
