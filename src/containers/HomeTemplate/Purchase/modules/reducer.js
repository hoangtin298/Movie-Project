import * as actionTypes from "./constant";

const initialState = {
  loading: false,
  data: null,
  error: null,
  bookingChairList: [],
};
export const movieShowtimesReducer = (
  state = initialState,
  { type, payload, ...action }
) => {
  switch (type) {
    case actionTypes.GET_MOVIE_SHOWTIMES_REQUEST:
      state.loading = true;
      state.data = null;
      state.error = null;
      return { ...state };
    case actionTypes.GET_MOVIE_SHOWTIMES_SUCCESS:
      state.loading = false;
      state.data = payload;
      state.error = null;
      return { ...state };
    case actionTypes.GET_MOVIE_SHOWTIMES_FAILED:
      state.loading = false;
      state.data = null;
      state.error = payload;
      return { ...state };
    case "CHOOSE_CHAIR": {
      let newChoosingChairList = [...state.bookingChairList];
      let index = newChoosingChairList.findIndex(
        (choseChair) => choseChair.maGhe === payload.maGhe
      );
      if (index !== -1) {
        newChoosingChairList.splice(index, 1);
      } else {
        newChoosingChairList.push(payload);
      }
      state.bookingChairList = newChoosingChairList;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
