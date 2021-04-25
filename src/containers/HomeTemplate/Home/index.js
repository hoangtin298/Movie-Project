import React from "react";
import CinemaList from "../../../components/CinemaList";
import MovieList from "../../../components/MovieList";
import Footer from "../../../components/Footer"

const Home = () => {
  return (
    <>
      <MovieList />
      {/* <CinemaList /> */}
      <Footer />
    </>
  );
};

export default Home;
