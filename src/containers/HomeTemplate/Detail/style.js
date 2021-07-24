import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  film: {
    "&:hover $hoverThumbnail": {
      opacity: "1",
      visibility: "visible",
    },
  },
  detail__topBG: {
    filter: "blur(15px)",
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    position: "absolute",
    zIndex: "1",
  },
  topBG__img: {
    width: "100%",
    height: "550px",
  },
  // detail__bgGradient: {
  //   position: "absolute",
  //   top: "0",
  //   left: "0",
  //   background: "linear-gradient(to top, rgb(10, 32, 41), transparent 100%)",
  //   // height: "100vh",
  //   width: "100%",
  //   zIndex: "2",
  // },
  detail__shiftCenter: {
    position: "absolute",
    zIndex: "4",
    top: "30%",
    left: "50%",
    margin: "auto",
    transform: "translateX(-50%)",
  },
  detail__filmImg: {
    position: "relative",
    borderRadius: "4px",
    backgroundPosition: "center center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    display: "block",
    marginBottom: "10px",
    height: "314px",
  },
  hoverThumbnail: {
    position: "absolute",
    width: "100%",
    height: "100%",
    top: "0",
    borderRadius: "4px",
    // background: "linear-gradient(to top,#000,transparent 100%)",
    opacity: "0",
    visibility: "hidden",
    transition: "all 0.3s ",
  },
  buttonPlay: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    zIndex: 3,
    border: "none",
    background: "transparent",
    width: "70px",
    height: "70px",
    "&:hover": {
      opacity: 0.7,
      background: "transparent",
    },
  },
  imgButtonPlay: {
    width: "100%",
  },
  colorWhite: {
    color: theme.palette.common.white,
  },
  detail__filmInfo: {
    // width: "30%!important",
    position: "absolute",
    zIndex: "3",
    top: "15%",
    // transform: "translateY(-50%)",
    [theme.breakpoints.down("sm")]: {
      top: "10%",
    },
  },
  detail__bticket: {
    borderRadius: "4px",
    width: "100px",
    color: theme.palette.common.white,
    fontSize: theme.typography.h3.fontSize,
    textDecoration: "none",
    textAlign: "center",
    display: "block",
    padding: theme.spacing(1, 2),
    margin: theme.spacing(1, 0),
    backgroundColor: theme.palette.primary.main,
    cursor: "pointer",
    "&:hover": {
      backgroundColor: theme.palette.primary.bloodRed,
    },
  },
  progessBar: {
    width: "110px!important",
    height: "110px!important",
    color: theme.palette.primary.lightGreen,
  },
  speFont: {
    color: theme.palette.common.white,
    fontSize: "50px",
  },
  progressBarBg: {
    // left: "5px",
    width: "110px!important",
    height: "110px!important",
    zIndex: "-2",
    backgroundColor: "rgba(0,0,0,.4)",
    borderRadius: "50%",
  },
  detail__flexColumn: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    transform: "translateX(90px)",
  },
  spacingRow: {
    margin: theme.spacing(1, 0),
  },
  ratingStar: {
    marginTop: "10px",
    color: theme.palette.primary.main,
    [theme.breakpoints.down("sm")]: {
      fontSize: "10px!important",
      margin: theme.spacing(1, 0),
    },
  },
  detailContainer: {
    margin: "10px 0",
  },
  detailAccor: {
    backgroundColor: "transparent!important",
    border: "none!important",
    color: "#fff",
    marginBottom: theme.spacing(1),
    boxShadow: "unset!important",
  },
  noPadding: {
    padding: "0!important",
  },
  noMinHeight: {
    height: "15px!important",
    minHeight: "unset",

    width: "90px",
  },
  colorNe: {
    color: "#fff",
  },
  overFlowY: {
    height: "70px",
    overflowY: "auto",
    "&::-webkit-scrollbar": {
      width: "7px",
    },
    "&::-webkit-scrollbar-track": {
      boxShadow: "inset 0 0 5px grey",
      borderRadius: "10px",
    },
    "&::-webkit-scrollbar-thumb": {
      boxShadow: "inset 0 0 5px #616161",
      background: theme.palette.common.white,
      borderRadius: "10px",
    },
  },
  heading: {
    fontSize: "16px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "13px!important",
    },
  },
}));
