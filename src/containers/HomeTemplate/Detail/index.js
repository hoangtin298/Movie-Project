import {
  Box,
  Button,
  CircularProgress,
  Container,
  Grid,
  Typography,
} from "@material-ui/core";
import React, { useEffect } from "react";
import Spinner from "react-spinner-material";
import { useDispatch, useSelector } from "react-redux";
import { actGetMovieDetailApi } from "./modules/action";
import { useStyles } from "./style";
import { Rating } from "@material-ui/lab";
import banner from "../../../assets/banner-img.png";
import { Link } from "react-router-dom";
import theme from "../../../theme/index";
import moment from "moment";
import MenuCinema from "../../../components/MenuCinema";
function Detail(props) {
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
  const renderThongTinPhim = (data) => {
    return (
      <Grid container className={classes.detail__filmInfo} spacing={1}>
        <Grid item xs={12}>
          <Typography variant="h4">
            {moment(data.ngayKhoiChieu).format("DD.MM.YYYY")}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h1">{data.tenPhim}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5">
            {data.heThongRapChieu[0].cumRapChieu[0].lichChieuPhim[0].thoiLuong}{" "}
            phút
          </Typography>
        </Grid>
        <Grid item xs={12} style={{ marginTop: "25px" }}>
          <Link to={"/purchase"} className={classes.detail__bticket}>
            Mua vé
          </Link>
        </Grid>
      </Grid>
    );
  };
  const renderDanhGiaPhim = (data) => {
    return (
      <Grid
        container
        className={classes.detail__filmInfo}
        style={{ right: "-15%" }}
      >
        <Grid item className={classes.detail__flexColumn}>
          <Box
            position="relative"
            display="inline-flex"
            style={{ justifyContent: "center" }}
          >
            <CircularProgress
              variant="determinate"
              value={data.danhGia * 10}
              className={classes.progessBar}
            />
            <Box
              top={0}
              left={0}
              bottom={0}
              right={0}
              position="absolute"
              display="flex"
              alignItems="center"
              justifyContent="center"
              className={classes.progressBarBg}
            >
              <Typography
                variant="caption"
                component="div"
                color="textSecondary"
                className={classes.speFont}
              >
                {data.danhGia}
              </Typography>
            </Box>
          </Box>
          <Rating
            name="read-only"
            value={data.danhGia / 2}
            readOnly
            style={{ color: theme.palette.primary.main, marginTop: "15px" }}
          />
        </Grid>
      </Grid>
    );
  };
  const classes = useStyles();
  const dispatch = useDispatch();
  const movieDetail = useSelector((state) => state.movieDetailReducer);
  useEffect(() => {
    let movieId = props.match.params.maPhim;
    dispatch(actGetMovieDetailApi(movieId));
  }, []);
  return (
    <Container
      maxWidth="xl"
      style={{
        position: "relative",
        backgroundColor: "#0a2029",
        height: "900px",
      }}
    >
      {movieDetail.loading ? (
        renderLoading()
      ) : (
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "550px",
            top: "0",
            left: "0",
          }}
        >
          <div className={classes.detail__bgGradient}></div>
          <div className={classes.detail__topBG}>
            <img src={banner} className={classes.topBG__img} />
          </div>
          {movieDetail.data ? (
            <Container maxWidth="md" className={classes.detail__shiftCenter}>
              <Grid container spacing={4}>
                <Grid item xs={3}>
                  <div
                    style={{
                      backgroundImage: `url(${movieDetail.data.hinhAnh}), url(https://tix.vn/app/assets/img/default-film.webp)`,
                    }}
                    className={classes.detail__filmImg}
                  ></div>
                </Grid>
                <Grid item xs={5} className={classes.colorWhite}>
                  {renderThongTinPhim(movieDetail.data)}
                </Grid>
                <Grid item xs={4}>
                  {renderDanhGiaPhim(movieDetail.data)}
                </Grid>
                <Grid item xs={12} style={{ marginTop: "40px" }}>
                  <MenuCinema data={movieDetail.data.heThongRapChieu} />
                </Grid>
              </Grid>
            </Container>
          ) : null}
        </div>
      )}
    </Container>
  );
}

export default Detail;
