import React, { useEffect, useState } from "react";
import { Grid, Modal, Typography } from "@material-ui/core";
import Fab from "@material-ui/core/Fab";
import { useStyles } from "./style";
import { Link } from "react-router-dom";
import imgButtonPlay from "../../assets/play-video.png";
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.min.css";

function MovieSingle(props) {
  const classes = useStyles();

  const [isOpenModal, setOpenModal] = useState(false);

  let trailerString = props.data.trailer;
  trailerString = trailerString.replace("https://www.youtube.com/watch?v=", "");
  trailerString = trailerString.replace("https://www.youtube.com/embed/", "");
  trailerString = trailerString.replace("https://youtu.be/", "");
  trailerString = trailerString.trim();

  return (
    <div>
      <Link to={`/detail/${props.data.maPhim}`} className={classes.filmLink}>
        <Grid container xs={12} className={classes.film}>
          {/* Thumbnail */}
          <Grid
            sm={12}
            xs={4}
            container
            className={classes.thumbnail}
            style={{
              backgroundImage: `url(${props.data.hinhAnh}), url(https://tix.vn/app/assets/img/default-film.webp)`,
            }}
          >
            {/* Thumbnail when hover */}
            <div className={classes.hoverThumbnail}>
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
            </div>
          </Grid>
          {/* Information */}
          <Grid container sm={12} xs={8} className={classes.info}>
            <div className={classes.thongTinPhim}>
              <div className={classes.tenPhim}>
                <span className={classes.limitAge}>C18</span>
                {props.data.tenPhim}
              </div>
              <div>
                <Typography className={classes.moTa} variant="h4">
                  {props.data.moTa}
                </Typography>
              </div>
            </div>

            {/* Mua vé button */}
            <div>
              <Link
                to={`/detail/${props.data.maPhim}`}
                className={classes.muaVe}
              >
                MUA VÉ
              </Link>
            </div>
          </Grid>
        </Grid>
      </Link>
      <div>
        <ModalVideo
          channel="youtube"
          autoplay="1"
          isOpen={isOpenModal}
          videoId={trailerString}
          onClose={() => setOpenModal(false)}
        />
      </div>
    </div>
  );
}

export default MovieSingle;
