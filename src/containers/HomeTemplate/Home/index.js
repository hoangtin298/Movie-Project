import React from "react";
import MyCarousel from "../../../components/MyCarousel";
import CinemaList from "../../../components/CinemaList";
import MovieList from "../../../components/MovieList";

import Footer from "../../../components/Footer";

import { Container, CssBaseline, Hidden, makeStyles } from "@material-ui/core";
import AppHome from "../../../components/AppHome";
import BackNews from "../../../assets/back-news.png";

const useStyles = makeStyles((theme) => ({
  homeCinemaComplex: {
    marginTop: 30,
    paddingTop: 120,
    backgroundSize: "100%",
    backgroundRepeat: "no-repeat",
    background: `url(${BackNews})`,
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <>
      <Hidden xsDown>
        <MyCarousel />
      </Hidden>
      <MovieList />
      <Hidden smDown>
        <Container
          maxWidth="md"
          className={classes.homeCinemaComplex}
          id="cumRap"
        ></Container>
        <CinemaList />
      </Hidden>
      <AppHome />
      <Footer />
    </>
  );
};

export default Home;
