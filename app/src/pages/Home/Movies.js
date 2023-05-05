import React from "react";
import MovieCarousel from "../../components/card/MoviesCarousel";
import AnimationCorridor from "../../components/corridors/AnimationCorridor/AnimationCorridor";
import Header from "../../components/Header";
import Video from "../../components/Video/Video";
import UseApi from "../../hooks/useApi";
import { StyledHomeCorridors } from "./style/StyledHome.style";
import RomanceCorridor from "../../components/corridors/RomanceCorridor/RomanceCorridor";
import TerrorCorridor from "../../components/corridors/TerrorCorridor/TerrorCorridor";
import ComedyCorridor from "../../components/corridors/ComedyCorridor/ComedyCorridor";
import Categories from "../../components/categories/categories";

const Movie = () => {
  const image = "https://image.tmdb.org/t/p/w500/";
  const handleDragStart = (e) => e.preventDefault();

  const { movies } = UseApi(
    `https://api.themoviedb.org/3/movie/popular?api_key=e843b62ccda89c4fc4880f2b669634d5&language=en-US`
  );

  const { moviesDetails } = UseApi(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=e843b62ccda89c4fc4880f2b669634d5`
  );

  return (
    <>
      <Header />
      <MovieCarousel
        movies={movies}
        image={image}
        handleDragStart={handleDragStart}
      />
      <Categories />
      <StyledHomeCorridors>
        <RomanceCorridor />
        <AnimationCorridor />
        <TerrorCorridor />
        <ComedyCorridor />
      </StyledHomeCorridors>
    </>
  );
};

export default Movie;
