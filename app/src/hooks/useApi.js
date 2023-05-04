import { useEffect, useState } from "react";

const UseApi = (url) => {
  const [movies, setMovies] = useState([]);
  const [moviesDetails, setMoviesDetails] = useState([]);
  const [searchMovies, setSearchMovies] = useState([]);
  const [findByTerm, setFindByTerm] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results);
        setMoviesDetails(data.genres);
        setSearchMovies(data.results);
        setFindByTerm(data.results);
      });
  }, []);

  return { movies, moviesDetails, searchMovies, setSearchMovies, findByTerm };
};

export default UseApi;
