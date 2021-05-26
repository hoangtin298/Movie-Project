import * as actionTypes from "./constant";
import axios from "axios";

export const actGetCinemaListApi = () => {
  return (dispatch) => {
    dispatch(actGetCinemaListRequest());
    axios({
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinHeThongRap`,
      method: "GET",
    })
      .then((result) => {
        dispatch(actGetCinemaListSuccess(result.data));
      })
      .catch((error) => {
        dispatch(actGetCinemaListFailed(error));
      });
  };
};

export const actGetCinemaByIdApi = (id) => {
  return (dispatch) => {
    dispatch(actGetCinemaByIdRequest());
    axios({
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap`,
      method: "GET",
      params: {
        maHeThongRap: id,
        maNhom: "GP09",
      },
    })
      .then((result) => {
        dispatch(actGetCinemaByIdSuccess(result.data));
      })
      .catch((error) => {
        dispatch(actGetCinemaByIdFailed(error));
      });
  };
};

const actGetCinemaListRequest = () => {
  return {
    type: actionTypes.GET_CINEMA_LIST_REQUEST,
  };
};

const actGetCinemaListSuccess = (list) => {
  return {
    type: actionTypes.GET_CINEMA_LIST_SUCCESS,
    payload: list,
  };
};

const actGetCinemaListFailed = (error) => {
  return {
    type: actionTypes.GET_CINEMA_LIST_FAILED,
    payload: error,
  };
};

const actGetCinemaByIdRequest = () => {
  return {
    type: actionTypes.GET_CINEMA_BY_ID_REQUEST,
  };
};

const actGetCinemaByIdSuccess = (cinemas) => {
  return {
    type: actionTypes.GET_CINEMA_BY_ID_SUCCESS,
    payload: cinemas,
  };
};

const actGetCinemaByIdFailed = (error) => {
  return {
    type: actionTypes.GET_CINEMA_BY_ID_FAILED,
    payload: error,
  };
};
