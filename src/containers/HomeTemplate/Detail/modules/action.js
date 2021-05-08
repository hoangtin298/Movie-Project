import * as actionTypes from "./constant";
import axios from "axios";

export const actGetMovieDetailApi = (movieId) => {
  return (dispatch) => {
    dispatch(actGetMovieDetailRequest());
    axios({
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${movieId}`,
      method: "GET",
    })
      .then((result) => {
        dispatch(actGetMovieDetailSuccess(result.data));
      })
      .catch((error) => {
        dispatch(actGetMovieDetailFailed(error));
      });
  };
};

const actGetMovieDetailRequest = () => {
  return {
    type: actionTypes.GET_MOVIE_DETAIL_REQUEST,
  };
};

const actGetMovieDetailSuccess = (movieDetail) => {
  return {
    type: actionTypes.GET_MOVIE_DETAIL_SUCCESS,
    payload: movieDetail,
  };
};

const actGetMovieDetailFailed = (error) => {
  return {
    type: actionTypes.GET_MOVIE_DETAIL_FAILED,
    payload: error,
  };
};
