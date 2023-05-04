import React, { useState } from "react";
import AppContext from "./AppContext";

const AppProvider = (props) => {
  const { children } = props;
  const [productCart, setProductCart] = useState(false);
  const [movieData, setMovieData] = useState([]);

  const providerValue = {
    productCart,
    setProductCart,
    movieData,
    setMovieData,
  };

  return (
    <AppContext.Provider value={providerValue}>{children}</AppContext.Provider>
  );
};

export default AppProvider;
