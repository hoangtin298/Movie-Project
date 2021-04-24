import * as actionTypes from "./constant";
import axios from "axios";
import Swal from "sweetalert2";
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
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Đăng ký thành công",
          showConfirmButton: false,
          timer: 1500,
        });
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
