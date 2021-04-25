import React from "react";
import MyCarousel from "../../../components/MyCarousel";
import CinemaList from "../../../components/CinemaList";
import MovieList from "../../../components/MovieList";
import { Hidden } from "@material-ui/core";

const Home = () => {
  return (
    <>
      <Hidden smDown>
        <MyCarousel />
      </Hidden>
      <MovieList />
      <CinemaList />
    </>
  );
};

export default Home;
