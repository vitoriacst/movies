import React, { useContext, useState } from "react";
import { animation, apiKey } from "../../../constants/constants";
import UseApi from "../../../hooks/useApi";
import Cards from "../../card/Cards";
import { StyledActionMoviesRow, StyledRow } from "../../card/StyledCard.styled";

const AnimationCorridor = () => {
  const { animationMovies } = UseApi(
    `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${animation}`
  );

  return (
    <>
      <StyledRow>
        <StyledActionMoviesRow>
          <Cards movies={animationMovies} moviesDetails={animationMovies} />
        </StyledActionMoviesRow>
      </StyledRow>
    </>
  );
};

export default AnimationCorridor;
