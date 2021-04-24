import * as actionTypes from "./constant";

const initialState = {
  loading: false,
  data: null,
  error: null,
};

export const cinemaListReducer = (
  state = initialState,
  { type, payload, ...action }
) => {
  switch (type) {
    case actionTypes.GET_CINEMA_LIST_REQUEST:
      state.loading = true;
      state.data = null;
      state.error = null;
      return { ...state };
    case actionTypes.GET_CINEMA_LIST_SUCCESS:
      state.loading = null;
      state.data = payload;
      state.error = null;
      return { ...state };
    case actionTypes.GET_CINEMA_LIST_FAILED:
      state.loading = null;
      state.data = null;
      state.error = payload;
      return { ...state };
    default:
      return { ...state };
  }
};
