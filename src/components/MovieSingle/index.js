import React from "react";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";

function MovieSingle(props) {
  return (
    <Card>
      <CardActionArea>
        <CardMedia
          style={{
            height: "300px",
          }}
          image={props.data.hinhAnh}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.data.tenPhim}
          </Typography>
          <Typography variant="body2" component="p">
            {props.data.moTa}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default MovieSingle;
