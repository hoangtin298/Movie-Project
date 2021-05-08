import React from "react";
import MyCarousel from "../../../components/MyCarousel";
import CinemaList from "../../../components/CinemaList";
import MovieList from "../../../components/MovieList";

import Footer from "../../../components/Footer";

import { Hidden } from "@material-ui/core";
import AppHome from "../../../components/AppHome";

const Home = () => {
  return (
    <>
      <Hidden xsDown>
        <MyCarousel />
      </Hidden>
      <MovieList />
      <CinemaList />
      <AppHome />
      <Footer />
    </>
  );
};

export default Home;
