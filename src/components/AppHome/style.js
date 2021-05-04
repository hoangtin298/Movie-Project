import { makeStyles } from "@material-ui/core";
import backgroundApp from "../../assets/backapp.jpg";
export const useStyles = makeStyles((theme) => ({
  root: {
    padding: "120px 0 80px 0",
    background: `url(${backgroundApp})`,
    backgroundSize: "contain",
    [theme.breakpoints.down("sm")]: {
      paddingTop: 0,
    },
  },
  left: {
    paddingTop: "60px !important",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
  },
  textLarge: {
    color: theme.palette.common.white,
    fontWeight: 700,
    fontSize: "xx-large",
    width: "100%",
    marginBottom: theme.spacing(1),
    [theme.breakpoints.down("sm")]: {
      width: "unset",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: theme.typography.h1.fontSize,
    },
  },
  textSmall: {
    color: theme.palette.common.white,
    fontSize: "medium",
    width: "100%",
    marginBottom: theme.spacing(1),
    marginTop: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      width: "unset",
      textAlign: "center",
    },
  },
  textUnder: {
    color: theme.palette.common.white,
    fontSize: "medium",
    width: "100%",
    paddingTop: theme.spacing(2),
    marginBottom: theme.spacing(1),
    [theme.breakpoints.down("sm")]: {
      width: "unset",
    },
  },
  textApp: {
    color: theme.palette.common.white,
  },
  textButton: {
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(1, 4),
    color: theme.palette.common.white,
    fontSize: "medium",
    fontWeight: theme.typography.fontWeightBold,
    border: "none",
    borderRadius: "4px",
    marginTop: theme.spacing(2),
  },

  right: {
    position: "relative",
    padding: "0 !important",
  },
  imgPhone: {
    position: "relative",
    padding: "0 28%",
    display: "block",
    maxWidth: "100%",
    height: "auto",
  },
  carousel: {
    display: "block",
    position: "absolute",
    padding: "1.5% 29.2% 0 29.2%",
    top: 0,
    left: 0,
    width: "100%",
    borderRadius: "20px",
  },
  rightItem: {
    position: "relative",
    display: "block",
    overflow: "hidden",
    margin: 0,
    padding: 0,
    borderRadius: "20px",
  },
}));
