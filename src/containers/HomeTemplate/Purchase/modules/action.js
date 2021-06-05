import * as actionTypes from "./constant";
import axios from "axios";
import { TOKEN } from "./newconstant";
export const actGetMovieShowtimesApi = (showTimesID) => {
  return (dispatch) => {
    dispatch(actGetMovieShowTimesRequest());
    axios({
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${showTimesID}`,
      method: "GET",
    })
      .then((result) => {
        dispatch(actGetMovieShowTimesSuccess(result.data));
      })
      .catch((error) => {
        dispatch(actGetMovieShowTimesFailed(error));
      });
  };
};

const actGetMovieShowTimesRequest = () => {
  return {
    type: actionTypes.GET_MOVIE_SHOWTIMES_REQUEST,
  };
};

const actGetMovieShowTimesSuccess = (showTimes) => {
  return {
    type: actionTypes.GET_MOVIE_SHOWTIMES_SUCCESS,
    payload: showTimes,
  };
};
const actGetMovieShowTimesFailed = (error) => {
  return {
    type: actionTypes.GET_MOVIE_SHOWTIMES_FAILED,
    payload: error,
  };
};
export const actBookTicket = (ticketInfo) => {
  return async (dispatch) => {
    try {
      const result = await axios({
        url: "https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/DatVe",
        method: "POST",
        data: ticketInfo,
        headers: {
          Authorization: `Bearer ${
            JSON.parse(localStorage.getItem("currentUser")).accessToken
          }`,
        },
      });

      if (result.status === 200) {
        // window.location.reload();
      }
    } catch (error) {
      console.log(localStorage.getItem(TOKEN));
      console.log("error", error.response?.data);
    }
  };
};
