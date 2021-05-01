import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actGetMovieDetailApi } from "./modules/action";
function Detail(props) {
  const dispatch = useDispatch();
  const movieDetail = useSelector((state) => state.movieDetailReducer);

  useEffect(() => {
    const movieId = props.match.params.id;
    dispatch(actGetMovieDetailApi(movieId));
  }, []);

  return <div>This is detail page</div>;
}

export default Detail;
