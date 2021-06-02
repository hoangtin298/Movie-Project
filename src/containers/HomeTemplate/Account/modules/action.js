import * as actionTypes from "./constant";
import axios from "axios";

export const actGetCurrentAccountApi = (tuKhoa) => {
  return (dispatch) => {
    dispatch(actGetCurrentAccountRequest());
    axios({
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/TimKiemNguoiDung`,
      method: "GET",
      params: {
        MaNhom: "GP09",
        tuKhoa,
      },
    })
      .then((result) => {
        dispatch(actGetCurrentAccountSuccess(result.data));
      })
      .catch((error) => {
        dispatch(actGetCurrentAccountFailed(error));
      });
  };
};

const actGetCurrentAccountRequest = () => {
  return {
    type: actionTypes.GET_CURRENT_ACCOUNT_REQUEST,
  };
};

const actGetCurrentAccountSuccess = (account) => {
  return {
    type: actionTypes.GET_CURRENT_ACCOUNT_SUCCESS,
    payload: account,
  };
};

const actGetCurrentAccountFailed = (error) => {
  return {
    type: actionTypes.GET_CURRENT_ACCOUNT_FAILED,
    payload: error,
  };
};
