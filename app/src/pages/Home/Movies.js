import React from 'react';
import Cards from '../../components/Cards';
import Header from '../../components/Header';

const Movie = () => {
  return (
    <>
      <Header />
      <h1 className="font-light mt-10 p-6 text-white">FILMES MAIS FAMOSOS</h1>
      <Cards />
    </>
  );
};

export default Movie;
