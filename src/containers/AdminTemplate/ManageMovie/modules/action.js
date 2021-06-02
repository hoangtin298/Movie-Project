import * as actionTypes from "./constant";
import axios from "axios";

export const actGetMoviePagingApi = (soTrang, soPhanTuTrenTrang, tenPhim) => {
  return (dispatch) => {
    dispatch(actGetMoviePagingRequest());
    axios({
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhimPhanTrang`,
      method: "GET",
      params: {
        maNhom: "GP09",
        tenPhim,
        soTrang,
        soPhanTuTrenTrang,
      },
    })
      .then((result) => {
        dispatch(actGetMoviePagingSuccess(result.data));
      })
      .catch((error) => {
        dispatch(actGetMoviePagingFailed(error));
      });
  };
};

const actGetMoviePagingRequest = () => {
  return {
    type: actionTypes.GET_MOVIE_PAGING_REQUEST,
  };
};
const actGetMoviePagingSuccess = (moviePaging) => {
  return {
    type: actionTypes.GET_MOVIE_PAGING_SUCCESS,
    payload: moviePaging,
  };
};
const actGetMoviePagingFailed = (error) => {
  return {
    type: actionTypes.GET_MOVIE_PAGING_FAILED,
    payload: error,
  };
};
