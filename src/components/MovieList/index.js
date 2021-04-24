import { Container, Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import MovieSingle from "../MovieSingle";
import { actGetMovieListApi } from "./modules/action";
import Spinner from "react-spinner-material";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Pagination from "@material-ui/lab/Pagination";

const useStyles = makeStyles((theme) => ({
  pagination: {
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
    display: "flex",
    justifyContent: "center",
    marginTop: "20px",
  },
}));

function MovieList(props) {
  const movieList = useSelector((state) => state.movieListReducer);
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);
  const classes = useStyles();

  const handleChange = (event, value) => {
    setCurrentPage(value);
    dispatch(actGetMovieListApi(value.toString(), "8"));
  };

  useEffect(() => {
    // so trang hien tai va so phan tu tren trang
    dispatch(actGetMovieListApi("1", "8"));
  }, []);

  const renderMovieList = () => {
    return movieList.data.map((item) => {
      return (
        <Grid key={item.maPhim} item={true} xs={4}>
          <MovieSingle data={item} />
        </Grid>
      );
    });
  };

  const renderLoading = () => {
    return (
      <div
        style={{
          height: "80vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderColor: "#0ff",
        }}
      >
        <Spinner
          size={120}
          spinnerColor={"#00f"}
          spinnerWidth={1}
          visible={true}
        />
      </div>
    );
  };

  return (
    <Container maxWidth="lg">
      {movieList.loading ? renderLoading() : null}

      <Grid container spacing={3}>
        {movieList.data ? renderMovieList() : null}
      </Grid>

      <div className={classes.pagination}>
        <Pagination count={7} page={currentPage} onChange={handleChange} />
      </div>
    </Container>
  );
}

export default MovieList;
