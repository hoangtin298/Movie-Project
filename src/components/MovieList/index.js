import {
  Container,
  Grid,
  Hidden,
  IconButton,
  InputBase,
  Paper,
  TextField,
  Typography,
  useMediaQuery,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import MovieSingle from "../MovieSingle";
import { actGetMovieListApi } from "./modules/action";
import Spinner from "react-spinner-material";
import { useTheme } from "@material-ui/core/styles";
import Carousel from "react-material-ui-carousel";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import SearchIcon from "@material-ui/icons/Search";
import { useStyles } from "./style";
import { CollectionsOutlined } from "@material-ui/icons";
import { Alert } from "@material-ui/lab";
import Detail from "../../containers/HomeTemplate/Detail";

const chunkArray = (arr, size) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
    arr.slice(i * size, i * size + size)
  );

const renderLoading = () => {
  return (
    <div
      style={{
        height: "30vh",
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

function MovieList(props) {
  const movieList = useSelector((state) => state.movieListReducer);
  const dispatch = useDispatch();
  const theme = useTheme();
  const isMatchSm = useMediaQuery(theme.breakpoints.down("sm"));
  const isMatchXs = useMediaQuery(theme.breakpoints.down("xs"));
  const classes = useStyles();
  const [search, setSearch] = useState("");
  const numberOfElement = () => {
    if (isMatchSm) return 6;
    return 8;
  };
  useEffect(() => {
    dispatch(actGetMovieListApi());
  }, []);

  const handleOnChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleOnClickSearch = () => {
    if (search === "") {
      dispatch(actGetMovieListApi());
      return;
    }
    dispatch(actGetMovieListApi(search));
  };

  const handleOnKeyPress = (e) => {
    if (e.keyCode == 13) {
      e.preventDefault();
      if (search === "") {
        dispatch(actGetMovieListApi());
        return;
      }
      dispatch(actGetMovieListApi(search));
    }
  };

  const renderMovieGroup = (movieGroup) => {
    return movieGroup.map((item, index) => {
      return (
        <Container key={index} maxWidth="md" className={classes.movieGroup}>
          <Grid container spacing={3}>
            {renderMovieList(item)}
          </Grid>
        </Container>
      );
    });
  };

  const renderMovieList = (movieList) => {
    return movieList.map((item) => {
      return (
        <Grid key={item.maPhim} item={true} md={3} sm={4} xs={12}>
          <MovieSingle data={item} />
        </Grid>
      );
    });
  };

  return (
    <Container maxWidth="lg" className={classes.root} id="lichChieu">
      <Container maxWidth="md" className={classes.movieHead}>
        <Hidden mdUp>
          <Paper elevation={4} component="form" className={classes.paper}>
            <InputBase
              placeholder="Tìm kiếm phim"
              className={classes.inputBase}
              onChange={handleOnChangeSearch}
              onKeyDown={handleOnKeyPress}
            />
            <IconButton onClick={handleOnClickSearch}>
              <SearchIcon color="primary" />
            </IconButton>
          </Paper>
        </Hidden>
      </Container>

      {movieList.loading ? renderLoading() : null}
      {movieList.data && movieList.data.length === 0 ? (
        <Container maxWidth="md">
          <Alert variant="filled" severity="error" className={classes.alert}>
            <Typography variant="h3">
              Không có bộ phim nào trùng với từ khóa của bạn.
            </Typography>
          </Alert>
        </Container>
      ) : null}
      <Carousel
        className={classes.carousel}
        animation="slide"
        autoPlay={false}
        navButtonsAlwaysInvisible={true}
        NextIcon={<NavigateNextIcon className={classes.navButton} />}
        PrevIcon={<NavigateBeforeIcon className={classes.navButton} />}
        navButtonsProps={{
          style: {
            backgroundColor: "transparent",
          },
        }}
        navButtonsWrapperProps={{
          style: {
            top: "-8%",
          },
        }}
        indicatorIconButtonProps={
          isMatchXs
            ? {
                style: {
                  padding: "1px",
                },
              }
            : {
                style: {
                  padding: "4px",
                },
              }
        }
        IndicatorIcon={<FiberManualRecordIcon style={{ fontSize: "20px" }} />}
        activeIndicatorIconButtonProps={{
          style: {
            color: theme.palette.primary.main,
          },
        }}
        indicatorContainerProps={{}}
      >
        {movieList.data
          ? renderMovieGroup(chunkArray(movieList.data, numberOfElement()))
          : null}
      </Carousel>
    </Container>
  );
}

export default MovieList;
