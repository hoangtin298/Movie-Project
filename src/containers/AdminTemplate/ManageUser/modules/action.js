import * as actionTypes from "./constant";
import axios from "axios";

export const actGetUserPagingApi = (soTrang, soPhanTuTrenTrang, tuKhoa) => {
  return (dispatch) => {
    dispatch(actGetUserPagingRequest());
    axios({
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/TimKiemNguoiDungPhanTrang`,
      method: "GET",
      params: {
        MaNhom: "GP09",
        soTrang,
        soPhanTuTrenTrang,
        tuKhoa,
      },
    })
      .then((result) => {
        dispatch(actGetUserPagingSuccess(result.data));
      })
      .catch((error) => {
        dispatch(actGetUserPagingFailed(error));
      });
  };
};

const actGetUserPagingRequest = () => {
  return {
    type: actionTypes.GET_USER_PAGING_REQUEST,
  };
};

const actGetUserPagingSuccess = (userPaging) => {
  return {
    type: actionTypes.GET_USER_PAGING_SUCCESS,
    payload: userPaging,
  };
};

const actGetUserPagingFailed = (error) => {
  return {
    type: actionTypes.GET_USER_PAGING_SUCCESS,
    payload: error,
  };
};
