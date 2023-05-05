import { useContext, useState } from "react";
import { apiKey, genders } from "../constants/constants";
import AppContext from "../contexts/AppContext";

const [movieId, setMovieId] = useState([]);
