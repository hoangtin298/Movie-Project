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

export const actGetInfoApi = (taiKhoan) => {
  return (dispatch) => {
    dispatch(actGetInfoRequest());
    axios({
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThongTinTaiKhoan`,
      method: "POST",
      data: { taiKhoan },
    })
      .then((result) => {
        dispatch(actGetInfoSuccess(result.data));
      })
      .catch((error) => {
        dispatch(actGetInfoFailed(error));
      });
  };
};

const actGetInfoRequest = () => {
  return {
    type: actionTypes.GET_INFO_REQUEST,
  };
};
const actGetInfoSuccess = (info) => {
  return {
    type: actionTypes.GET_INFO_SUCCESS,
    payload: info,
  };
};
const actGetInfoFailed = (error) => {
  return {
    type: actionTypes.GET_INFO_FAILED,
    payload: error,
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
