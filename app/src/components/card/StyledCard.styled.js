import styled from "styled-components";

export const StyledMoviesRow = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

export const StyledRow = styled.div`
  display: flex;
  overflow-x: scroll;
  scroll-behavior: smooth;
  &::-webkit-scrollbar {
    height: 8px;
  }
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 5px;
  }
`;

export const StyledActionMoviesRow = styled.div`
  display: flex;
  padding: 15px;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(10px);

  margin-right: 20px;
`;

export const StyledCard = styled.div`
  width: 420px;
  height: 440px;
  border-radius: 4px;
  display: flex;
  align-items: center;
`;

export const StyledCardImage = styled.img`
  width: 300px;
  height: 300px;
`;

export const StyledRowImage = styled.img`
  width: 420px;
  height: 440px;
`;
