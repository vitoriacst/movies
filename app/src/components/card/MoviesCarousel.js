import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { StyledRowImage } from "./StyledCard.styled";
import { settings } from "../../constants/constants";

const MovieCarousel = ({ movies, image, handleDragStart }) => {
  return (
    <Slider {...settings}>
      {movies.map((element, index) => (
        <div key={index}>
          <StyledRowImage
            src={`${image}${element.poster_path}`}
            onDragStart={handleDragStart}
            role="presentation"
          />
        </div>
      ))}
    </Slider>
  );
};

export default MovieCarousel;
