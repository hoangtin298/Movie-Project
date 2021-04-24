import { Typography } from "@material-ui/core";
import React from "react";

function MyTypography(props) {
  return (
    <Typography variant="h3" {...props}>
      {props.children}
    </Typography>
  );
}

export default MyTypography;
