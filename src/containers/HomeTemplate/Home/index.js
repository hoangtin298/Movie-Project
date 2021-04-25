import React from "react";
import MyCarousel from "../../../components/MyCarousel";
import CinemaList from "../../../components/CinemaList";
import MovieList from "../../../components/MovieList";
<<<<<<< HEAD
import Footer from "../../../components/Footer"
=======
import { Hidden } from "@material-ui/core";
>>>>>>> 563bf3e6dbbd995a7434b6caa387e62bb786b54f

const Home = () => {
  return (
    <>
      <Hidden smDown>
        <MyCarousel />
      </Hidden>
      <MovieList />
      {/* <CinemaList /> */}
      <Footer />
    </>
  );
};

export default Home;
