import { useEffect, useState } from 'react';

const UseApi = (url) => {
 const[movies, setMovies] = useState([])
 const [moviesDetails, setMoviesDetails] = useState([]);


 useEffect(() => {
  fetch(
    url
  )
    .then((response) => response.json())
    .then((data) => {
      setMovies(data.results);
      setMoviesDetails(data.genres)
    });
}, []);

  return { movies , moviesDetails}
}

export default UseApi;
