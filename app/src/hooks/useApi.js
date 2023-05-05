import { useEffect, useState } from "react";

const UseApi = (url) => {
  const [movies, setMovies] = useState([]);
  const [moviesDetails, setMoviesDetails] = useState([]);
  const [searchMovies, setSearchMovies] = useState([]);
  const [findByTerm, setFindByTerm] = useState([]);
  const [romanceMovies, setRomancesMovies] = useState([]);
  const [animationMovies, setAnimationsMovies] = useState([]);
  const [terrorMovies, setTerrorMovies] = useState([]);
  const [adventureMovies, setAdventureMovies] = useState([]);
  const [comedyMovies, setComedyMovies] = useState([]);
  const [scienceFictionMovies, setScienceFictionMovies] = useState([]);
  const [warMovies, setWarMovies] = useState([]);

  const [video, setVideo] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results);
        setMoviesDetails(data.genres);
        setSearchMovies(data.results);
        setFindByTerm(data.results);
        setRomancesMovies(data.results);
        setAnimationsMovies(data.results);
        setTerrorMovies(data.results);
        setAdventureMovies(data.results);
        setComedyMovies(data.results);
        setScienceFictionMovies(data.results);
        setWarMovies(data.results);
        setVideo(data.results);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return {
    movies,
    moviesDetails,
    searchMovies,
    setSearchMovies,
    findByTerm,
    animationMovies,
    romanceMovies,
    terrorMovies,
    adventureMovies,
    comedyMovies,
    scienceFictionMovies,
    warMovies,
    video,
  };
};

export default UseApi;
