import { Fab, Hidden, makeStyles, useTheme } from "@material-ui/core";
import React, { useState } from "react";
import Carousel from "react-material-ui-carousel";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import theme from "../../theme";
import imgButtonPlay from "../../assets/play-video.png";
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.min.css";
import HomeTool from "../HomeTool";

const useStyles = makeStyles({
  carousel: {
    position: "relative",
    "&:hover $hoverButton": {
      opacity: 1,
      visibility: "visible",
    },
  },
  item: {
    display: "block",
    width: "100%",
    height: "100%",
  },

  navButton: {
    fontSize: "50px",
    color: theme.palette.grey[500],
  },
  hoverButton: {
    opacity: 0,
    visibility: "hidden",
  },
  buttonPlay: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    zIndex: 3,
    border: "none",
    background: "transparent",
    width: "80px",
    height: "80px",
    "&:hover": {
      opacity: 0.7,
      background: "transparent",
    },
  },
  imgButtonPlay: {
    width: "100%",
  },
});

function MyCarousel(props) {
  const theme = useTheme();
  const classes = useStyles();

  const items = [
    {
      hinhAnh:
        "https://s3img.vcdn.vn/123phim/2021/04/lat-mat-48h-16177782153424.png",
      alt: "Img alt",
      trailer: "kBY2k3G6LsM",
    },
    {
      hinhAnh:
        "https://s3img.vcdn.vn/123phim/2021/04/ban-tay-diet-quy-evil-expeller-16177781815781.png",
      alt: "Img alt",
      trailer: "uqJ9u7GSaYM",
    },
    {
      hinhAnh:
        "https://s3img.vcdn.vn/123phim/2021/04/nguoi-nhan-ban-seobok-16177781610725.png",
      alt: "Img alt",
      trailer: "JNZv1SgHv68",
    },
  ];

  return (
    <div className={classes.carousel}>
      <Carousel
        animation="slide"
        autoPlay={true}
        navButtonsAlwaysVisible={true}
        NextIcon={<ArrowForwardIosIcon className={classes.navButton} />}
        PrevIcon={<ArrowBackIosIcon className={classes.navButton} />}
        navButtonsProps={{
          style: {
            backgroundColor: "transparent",
          },
        }}
        indicatorIconButtonProps={{
          style: {
            padding: "4px",
          },
        }}
        IndicatorIcon={<FiberManualRecordIcon style={{ fontSize: "20px" }} />}
        activeIndicatorIconButtonProps={{
          style: {
            color: theme.palette.primary.main,
          },
        }}
        indicatorContainerProps={{
          style: {
            position: "absolute",
            marginTop: "-7%",
          },
        }}
      >
        {items.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </Carousel>
      <Hidden smDown>
        <HomeTool />
      </Hidden>
    </div>
  );
}

function Item(props) {
  const classes = useStyles();
  const [isOpenModal, setOpenModal] = useState(false);

  return (
    <div>
      <img
        className={classes.item}
        src={props.item.hinhAnh}
        alt={props.item.alt}
      />
      <div className={classes.hoverButton}>
        <Fab
          className={classes.buttonPlay}
          onClick={(e) => {
            e.preventDefault();
            setOpenModal(true);
          }}
        >
          <img
            src={imgButtonPlay}
            alt="video-button"
            className={classes.imgButtonPlay}
          />
        </Fab>
        <ModalVideo
          channel="youtube"
          isOpen={isOpenModal}
          videoId={props.item.trailer}
          onClose={() => setOpenModal(false)}
        />
      </div>
    </div>
  );
}

export default MyCarousel;
