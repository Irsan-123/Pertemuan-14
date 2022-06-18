import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";
import { updateMovies } from "../../features/moviesSlice";
import ENDPOINTS from "../../utils/constants/endpoint";

function NowPlayingMovie() {
  //membuat dispatch
  const dispatch = useDispatch();

  useEffect(() => {
    getNowPlayingMovies();
  }, []);

  async function getNowPlayingMovies() {
    const response = await axios(ENDPOINTS.NOW_PLAYING);
    dispatch(updateMovies(response.data.results));
  }

  return (
    <>
      <Hero />
      <Movies title="Now Playing"/>
    </>
  );
}

export default NowPlayingMovie;