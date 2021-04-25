import React from "react";
import MyCarousel from "../../../components/MyCarousel";
import CinemaList from "../../../components/CinemaList";
import MovieList from "../../../components/MovieList";

const Home = () => {
  return (
    <>
      <MyCarousel />
      <MovieList />
      <CinemaList />
    </>
  );
};

export default Home;
