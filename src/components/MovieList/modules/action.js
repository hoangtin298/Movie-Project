import * as actionTypes from "./constant";
import axios from "axios";

export const actGetMovieListApi = (soTrang, soPhanTuTrenTrang) => {
  return (dispatch) => {
    dispatch(actGetMovieListRequest());
    axios({
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhimPhanTrang?maNhom=GP09`,
      method: "GET",
      params: {
        maNhom: "GP09",
        soTrang: soTrang,
        soPhanTuTrenTrang: soPhanTuTrenTrang,
      },
    })
      .then((result) => {
        dispatch(actGetMovieListSuccess(result.data.items));
      })
      .catch((error) => {
        dispatch(actGetMovieListFailed(error));
      });
  };
};

const actGetMovieListRequest = () => {
  return {
    type: actionTypes.GET_MOVIE_LIST_PAGING_REQUEST,
  };
};

const actGetMovieListSuccess = (list) => {
  return {
    type: actionTypes.GET_MOVIE_LIST_PAGING_SUCCESS,
    payload: list,
  };
};

const actGetMovieListFailed = (error) => {
  return {
    type: actionTypes.GET_MOVIE_LIST_PAGING_FAILED,
    payload: error,
  };
};
