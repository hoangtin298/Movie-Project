import { makeStyles, useTheme } from "@material-ui/core";
import React from "react";
import Carousel from "react-material-ui-carousel";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import theme from "../../theme";
const useStyles = makeStyles({
  item: {
    display: "block",
    width: "100%",
    height: "100%",
  },
  carousel: {
    position: "relative",
  },
  navButton: {
    fontSize: "50px",
    color: theme.palette.grey[500],
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
    },
    {
      hinhAnh:
        "https://s3img.vcdn.vn/123phim/2021/04/ban-tay-diet-quy-evil-expeller-16177781815781.png",
      alt: "Img alt",
    },
    {
      hinhAnh:
        "https://s3img.vcdn.vn/123phim/2021/04/nguoi-nhan-ban-seobok-16177781610725.png",
      alt: "Img alt",
    },
  ];

  return (
    <Carousel
      className={classes.carousel}
      animation="slide"
      autoPlay={false}
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
          marginTop: "-5%",
        },
      }}
    >
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

function Item(props) {
  const classes = useStyles();
  return (
    <div>
      <img
        className={classes.item}
        src={props.item.hinhAnh}
        alt={props.item.alt}
      />
    </div>
  );
}

export default MyCarousel;
