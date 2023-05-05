import { categories } from "../../constants/constants";
import { StyledActionMoviesRow, StyledRow } from "../card/StyledCard.styled";

const Categories = () => {
  return (
    <div>
      {categories.map((gender, index) => {
        return (
          <div>
            <StyledActionMoviesRow>
              <h1>{gender}</h1>
            </StyledActionMoviesRow>
          </div>
        );
      })}
    </div>
  );
};

export default Categories;
