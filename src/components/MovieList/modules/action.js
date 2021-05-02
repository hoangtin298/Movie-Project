import * as actionTypes from "./constant";
import axios from "axios";

export const actGetMovieListApi = (tenPhim) => {
  return (dispatch) => {
    dispatch(actGetMovieListRequest());
    axios({
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim`,
      method: "GET",
      params: {
        maNhom: "GP09",
        tenPhim,
      },
    })
      .then((result) => {
        dispatch(actGetMovieListSuccess(result.data));
      })
      .catch((error) => {
        dispatch(actGetMovieListFailed(error));
      });
  };
};

const actGetMovieListRequest = () => {
  return {
    type: actionTypes.GET_MOVIE_LIST_REQUEST,
  };
};

const actGetMovieListSuccess = (list) => {
  return {
    type: actionTypes.GET_MOVIE_LIST_SUCCESS,
    payload: list,
  };
};

const actGetMovieListFailed = (error) => {
  return {
    type: actionTypes.GET_MOVIE_LIST_FAILED,
    payload: error,
  };
};
