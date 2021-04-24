import * as actionTypes from "./constant";
import axios from "axios";
import Swal from "sweetalert2";

export const actSignInApi = (userAccount, history) => {
  return (dispatch) => {
    dispatch(actSignInRequest());
    axios({
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap`,
      method: "POST",
      data: userAccount,
    })
      .then((result) => {
        localStorage.setItem("currentUser", JSON.stringify(result.data));

        dispatch({
          type: "LOGGED_IN",
          payload: JSON.parse(localStorage.getItem("currentUser")),
        });

        dispatch(actSignInSuccess(result.data));

        Swal.fire({
          position: "center",
          icon: "success",
          title: "Đăng nhập thành công",
          showConfirmButton: false,
          timer: 1500,
        }).then((result) => {
          history.replace("/");
        });
      })
      .catch((error) => {
        dispatch(actSignInFailed(error));
      });
  };
};

const actSignInRequest = () => {
  return {
    type: actionTypes.SIGN_IN_REQUEST,
  };
};

const actSignInSuccess = (userAccount) => {
  return {
    type: actionTypes.SIGN_IN_SUCCESS,
    payload: userAccount,
  };
};

const actSignInFailed = (error) => {
  return {
    type: actionTypes.SIGN_IN_FAILED,
    payload: error,
  };
};
