import { makeStyles } from "@material-ui/core";
import React from "react";
import loadingImage from "../../assets/loadingPage.gif";

const useStyles = makeStyles((theme) => ({
  fbContainer: {
    position: "fixed",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    background: "white",
  },
  fpLoader: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-55%)",
    zIndex: "1000",
  },
}));

export default function LoadingPage() {
  const classes = useStyles();
  return (
    <div className={classes.fbContainer}>
      <img className={classes.fpLoader} src={loadingImage} alt="loading" />
    </div>
  );
}
