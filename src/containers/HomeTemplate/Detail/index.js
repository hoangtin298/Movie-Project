import {
  Box,
  Button,
  CircularProgress,
  Container,
  Fab,
  Grid,
  Typography,
  useMediaQuery,
} from "@material-ui/core";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import React, { useEffect, useState } from "react";
import Spinner from "react-spinner-material";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useDispatch, useSelector } from "react-redux";
import { actGetMovieDetailApi } from "./modules/action";
import { useStyles } from "./style";
import { Rating } from "@material-ui/lab";
import banner from "../../../assets/banner-img.png";
import { Link } from "react-scroll";
import { useTheme } from "@material-ui/core/styles";
import moment from "moment";
import MenuCinema from "../../../components/MenuCinema";
import imgButtonPlay from "../../../assets/play-video.png";
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.min.css";
import LoadingPage from "../../../components/LoadingPage";

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
      <div className={classes.detail__filmInfo}>
        {isMatchSm ? (
          <Typography variant="h5" className={classes.spacingRow}>
            {moment(data.ngayKhoiChieu).format("DD.MM.YYYY")}
          </Typography>
        ) : (
          <Typography variant="h4" className={classes.spacingRow}>
            {moment(data.ngayKhoiChieu).format("DD.MM.YYYY")}
          </Typography>
        )}
        {isMatchSm ? (
          <Typography variant="h3">{data.tenPhim}</Typography>
        ) : (
          <Typography variant="h1" className={classes.spacingRow}>
            {data.tenPhim}
          </Typography>
        )}
        {isMatchSm ? (
          <Typography className={classes.heading}>
            <Rating
              name="read-only"
              value={data.danhGia / 2}
              precision={0.5}
              readOnly
              className={classes.ratingStar}
            />{" "}
            {"("}
            {data.danhGia} điểm{")"}
          </Typography>
        ) : null}
        <Typography variant="h5">
          {data.heThongRapChieu[0].cumRapChieu[0].lichChieuPhim[0].thoiLuong}{" "}
          phút
        </Typography>
        <div className={classes.detailContainer}>
          <Accordion defaultExpanded className={classes.detailAccor}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon className={classes.colorNe} />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
              className={`${classes.noPadding} ${classes.noMinHeight}`}
            >
              <Typography className={classes.heading}>Mô tả</Typography>
            </AccordionSummary>
            <AccordionDetails
              className={`${classes.noPadding} ${classes.overFlowY}`}
            >
              <Typography className={classes.heading}>{data.moTa}</Typography>
            </AccordionDetails>
          </Accordion>
        </div>
        {isMatchSm ? null : (
          <div className={classes.linkContainer}>
            <Link
              to="cinemaList"
              smooth="true"
              duration={1000}
              spy={true}
              offset={-50}
              className={classes.detail__bticket}
            >
              Mua vé
            </Link>
          </div>
        )}
      </div>
    );
  };
  const renderDanhGiaPhim = (data) => {
    return (
      <div className={classes.detail__filmInfo}>
        <div className={classes.detail__flexColumn}>
          <Box
            position="relative"
            display="inline-flex"
            style={{ justifyContent: "center" }}
          >
            <CircularProgress
              variant="determinate"
              value={data.danhGia * 10}
              className={classes.progessBar}
              style={{ position: "relative" }}
            />
            <CircularProgress
              variant="determinate"
              value={100}
              style={{ color: "#3a3a3a", position: "absolute", zIndex: "-1" }}
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
            precision={0.5}
            readOnly
            style={{ color: theme.palette.primary.main, marginTop: "15px" }}
          />
        </div>
      </div>
    );
  };
  const theme = useTheme();
  const isMatchSm = useMediaQuery(theme.breakpoints.down("sm"));
  const isMatchXs = useMediaQuery(theme.breakpoints.down("xs"));
  const classes = useStyles();
  const dispatch = useDispatch();
  const movieDetail = useSelector((state) => state.movieDetailReducer);
  useEffect(() => {
    let movieId = props.match.params.maPhim;
    dispatch(actGetMovieDetailApi(movieId));
  }, []);
  const [isOpenModal, setOpenModal] = useState(false);
  const [trailer, setTrailer] = useState("");
  const handleTrailerString = (trailerString) => {
    trailerString = trailerString.replace(
      "https://www.youtube.com/watch?v=",
      ""
    );
    trailerString = trailerString.replace("https://www.youtube.com/embed/", "");
    trailerString = trailerString.replace("https://youtu.be/", "");
    trailerString = trailerString.trim();
    return trailerString;
  };

  return (
    <Container
      maxWidth="false"
      style={{
        position: "relative",
        backgroundColor: "#0a2029",
        minHeight: "1300px",
      }}
    >
      {movieDetail.loading ? (
        <LoadingPage />
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
                <Grid item xs={6} sm={4} md={3} lg={3} className={classes.film}>
                  <div
                    style={{
                      backgroundImage: `url(${movieDetail.data.hinhAnh}), url(https://tix.vn/app/assets/img/default-film.webp)`,
                    }}
                    className={classes.detail__filmImg}
                  >
                    {/* Thumbnail when hover */}
                    <div className={classes.hoverThumbnail}>
                      <Fab
                        className={classes.buttonPlay}
                        onClick={(e) => {
                          e.preventDefault();
                          setOpenModal(true);
                          setTrailer(
                            handleTrailerString(movieDetail.data.trailer)
                          );
                        }}
                      >
                        <img
                          src={imgButtonPlay}
                          alt="video-button"
                          className={classes.imgButtonPlay}
                        />
                      </Fab>
                    </div>
                  </div>
                </Grid>
                <Grid
                  style={{
                    position: "relative",
                  }}
                  item
                  xs={6}
                  md={5}
                  className={classes.colorWhite}
                >
                  {renderThongTinPhim(movieDetail.data)}
                </Grid>
                {isMatchSm ? null : (
                  <Grid
                    style={{
                      position: "relative",
                      display: "flex",
                      justifyContent: "center",
                    }}
                    item
                    xs={5}
                    md={4}
                  >
                    {renderDanhGiaPhim(movieDetail.data)}
                  </Grid>
                )}

                <Grid
                  item
                  xs={12}
                  style={{
                    marginTop: "40px",
                  }}
                  id="cinemaList"
                >
                  <MenuCinema data={movieDetail.data.heThongRapChieu} />
                </Grid>
              </Grid>
            </Container>
          ) : null}
        </div>
      )}
      <div>
        <ModalVideo
          channel="youtube"
          autoplay="1"
          isOpen={isOpenModal}
          videoId={trailer}
          onClose={() => setOpenModal(false)}
        />
      </div>
    </Container>
  );
}

export default Detail;
