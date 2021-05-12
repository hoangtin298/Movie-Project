import * as actionTypes from "./constant";
import axios from "axios";
import { swalSuccess, swalFailed } from "../../../../utils/index";

export const actSignUpApi = (userAccount) => {
  return (dispatch) => {
    dispatch(actSignUpRequest());
    axios({
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy`,
      method: "POST",
      data: userAccount,
    })
      .then((result) => {
        dispatch(actSignUpSuccess(result.data));
        swalSuccess("Đăng ký thành công");
      })
      .catch((error) => {
        dispatch(actSignUpFailed(error));
        console.log(error.response.data.error);
      });
  };
};

const actSignUpRequest = () => {
  return {
    type: actionTypes.SIGN_UP_REQUEST,
  };
};

const actSignUpSuccess = (userAccount) => {
  return {
    type: actionTypes.SIGN_UP_SUCCESS,
    payload: userAccount,
  };
};

const actSignUpFailed = (error) => {
  return {
    type: actionTypes.SIGN_UP_FAILED,
    payload: error,
  };
};
