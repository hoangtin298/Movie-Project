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
        console.log(result.data);
        dispatch(actGetCinemaListSuccess(result.data));
      })
      .catch((error) => {
        dispatch(actGetCinemaListFailed(error));
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
