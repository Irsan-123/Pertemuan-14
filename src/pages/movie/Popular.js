import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";
import { updateMovies } from "../../features/moviesSlice";
import ENDPOINTS from "../../utils/constants/endpoint";

function PopularMovie() {
  //panggil dispatch untuk mentriger
  const dispatch = useDispatch();
  useEffect(() => {
    getPopularMovies();
  }, []);

  async function getPopularMovies() {

    const response = await axios(ENDPOINTS.POPULAR);
    dispatch(updateMovies(response.data.results));
  }

  return (
    <>
      <Hero />
      <Movies title="Popular" />
    </>
  );
}

export default PopularMovie;
