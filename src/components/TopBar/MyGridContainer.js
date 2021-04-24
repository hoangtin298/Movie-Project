import { Grid } from "@material-ui/core";
import React from "react";

function MyGridContainer(props) {
  return (
    <Grid container justify="center" alignItems="center" {...props}>
      {props.children}
    </Grid>
  );
}

export default MyGridContainer;
