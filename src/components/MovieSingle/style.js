import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  film: {
    "&:hover $hoverThumbnail": {
      opacity: "1",
      visibility: "visible",
    },
    "&:hover $muaVe": {
      opacity: "1",
      visibility: "visible",
    },
    "&:hover $tenPhim": {
      opacity: "0",
      visibility: "hidden",
      [theme.breakpoints.down("xs")]: {
        opacity: "1",
        visibility: "visible",
      },
    },
    "&:hover $moTa": {
      opacity: "0",
      visibility: "hidden",
      [theme.breakpoints.down("xs")]: {
        opacity: "1",
        visibility: "visible",
      },
    },
  },
  filmLink: {
    textDecoration: "none",
  },
  thumbnail: {
    position: "relative",
    borderRadius: "4px",
    backgroundPosition: "center center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    display: "block",
    marginBottom: "10px",
    height: "314px",

    [theme.breakpoints.down("xs")]: {
      height: "200px",
    },
  },
  hoverThumbnail: {
    position: "absolute",
    width: "100%",
    height: "100%",
    top: "0",
    borderRadius: "4px",
    background: "linear-gradient(to top,#000,transparent 100%)",
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
    width: "60px",
    height: "60px",
    "&:hover": {
      opacity: 0.7,
      background: "transparent",
    },
  },
  imgButtonPlay: {
    width: "100%",
  },
  info: {
    position: "relative",
    display: "block",
    [theme.breakpoints.down("xs")]: {
      paddingLeft: theme.spacing(2),
    },
  },
  thongTinPhim: {
    [theme.breakpoints.down("xs")]: {
      height: "140px",
    },
  },
  tenPhim: {
    fontSize: "18px",
    fontWeight: 500,
    height: "45px",
    maxHeight: "45px",
    lineHeight: "22px",
    display: "-webkit-box",
    WebkitLineClamp: "2",
    WebkitBoxOrient: "vertical",
    textOverflow: "ellipsis",
    overflow: "hidden",

    opacity: "1",
    visibility: "visible",

    color: theme.palette.common.black,

    [theme.breakpoints.down("xs")]: {
      height: "26px",
      display: "-webkit-box",
      WebkitLineClamp: "1",
      WebkitBoxOrient: "vertical",
      textOverflow: "ellipsis",
      overflow: "hidden",
    },
  },
  limitAge: {
    display: "inline-block",
    fontSize: "16px",
    background: theme.palette.primary.main,
    borderRadius: "4px",
    padding: "0 5px",
    color: theme.palette.common.white,
    minWidth: "33px",
    textAlign: "center",
    marginRight: theme.spacing(1),
  },
  moTa: {
    display: "-webkit-box",
    WebkitLineClamp: "2",
    WebkitBoxOrient: "vertical",
    textOverflow: "ellipsis",
    overflow: "hidden",

    opacity: "1",
    visibility: "visible",

    margin: theme.spacing(0, 0, 2, 0),
    color: theme.palette.grey[600],

    [theme.breakpoints.down("xs")]: {
      WebkitLineClamp: "5",
      textAlign: "justify",
    },
  },
  muaVe: {
    position: "absolute",
    top: 0,
    left: 0,
    display: "block",
    width: "100%",
    borderRadius: "4px",
    color: theme.palette.common.white,
    fontSize: theme.typography.h2.fontSize,
    fontWeight: theme.typography.h2.fontWeight,
    textDecoration: "none",

    textAlign: "center",
    padding: theme.spacing(2, 1),
    background: "linear-gradient(to left,#fb4226,#ce3017 100%)",

    opacity: "0",
    visibility: "hidden",

    "&:hover": {
      background: theme.palette.primary.main,
    },

    [theme.breakpoints.down("xs")]: {
      opacity: "1",
      visibility: "visible",
      position: "relative",
    },
  },
  card__avgptsFilm: {
    fontSize: theme.typography.h3.fontSize,
    backgroundColor: "rgba(12,27,54,0.8)",
    border: "1px solid #1f2e46",
    borderRadius: "4px",
    padding: "2px",
    position: "absolute",
    zIndex: "3",
    top: "12px",
    right: "12px",
    color: "#fff",
    width: "54px",
    textAlign: "center",
    lineHeight: "1.1",
  },
  card__txtPoint: {
    lineHeight: "1.1!important",
  },
  card__rating: {
    color: theme.palette.primary.main,
    fontSize: "8px!important",
    [theme.breakpoints.down("sm")]: {
      fontSize: "10px!important",
    },
  },
}));
