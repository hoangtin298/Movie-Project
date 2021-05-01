import React, { useEffect, useState } from "react";
import { Grid, Typography } from "@material-ui/core";
import PlayCircleOutlineOutlinedIcon from "@material-ui/icons/PlayCircleOutlineOutlined";
import Fab from "@material-ui/core/Fab";
import { useStyles } from "./style";
import { Link } from "react-router-dom";

function MovieSingle(props) {
  const classes = useStyles();

  return (
    <Link to={`/detail/${props.data.maPhim}`} className={classes.filmLink}>
      <Grid container xs={12} className={classes.film}>
        {/* Thumbnail */}
        <Grid
          sm={12}
          xs={4}
          container
          className={classes.thumbnail}
          style={{
            backgroundImage: `url(${props.data.hinhAnh})`,
          }}
        >
          {/* Thumbnail when hover */}
          <div className={classes.hoverThumbnail}>
            <Fab
              aria-label="add"
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%,-50%)",
                zIndex: "3",
                border: "none",
                background: "0 0",
              }}
            >
              <PlayCircleOutlineOutlinedIcon
                style={{ color: "#fff", fontSize: "56px" }}
              />
            </Fab>
          </div>
        </Grid>
        {/* Information */}
        <Grid container sm={12} xs={8} className={classes.info}>
          <div className={classes.thongTinPhim}>
            <div>
              <Typography className={classes.tenPhim} variant="h2">
                {props.data.tenPhim}
              </Typography>
            </div>
            <div>
              <Typography className={classes.moTa} variant="h4">
                {props.data.moTa}
              </Typography>
            </div>
          </div>

          {/* Mua vé button */}
          <div>
            <Link to={`/detail/${props.data.maPhim}`} className={classes.muaVe}>
              MUA VÉ
            </Link>
          </div>
        </Grid>
      </Grid>
    </Link>
  );
}

export default MovieSingle;
