import * as actionTypes from "./constant";

const initialStateCinemaList = {
  loading: false,
  data: null,
  error: null,
};

const initialStateCinemaById = {
  loading: false,
  data: null,
  error: null,
};

export const cinemaListReducer = (
  state = initialStateCinemaList,
  { type, payload, ...action }
) => {
  switch (type) {
    case actionTypes.GET_CINEMA_LIST_REQUEST:
      state.loading = true;
      state.data = null;
      state.error = null;
      return { ...state };
    case actionTypes.GET_CINEMA_LIST_SUCCESS:
      state.loading = false;
      state.data = payload;
      state.error = null;
      return { ...state };
    case actionTypes.GET_CINEMA_LIST_FAILED:
      state.loading = false;
      state.data = null;
      state.error = payload;
      return { ...state };
    default:
      return { ...state };
  }
};

export const cinemaByIdReducer = (
  state = initialStateCinemaById,
  { type, payload }
) => {
  switch (type) {
    case actionTypes.GET_CINEMA_BY_ID_REQUEST:
      state.loading = true;
      state.data = null;
      state.error = null;
      return { ...state };
    case actionTypes.GET_CINEMA_BY_ID_SUCCESS:
      state.loading = false;
      state.data = payload;
      state.error = null;
      return { ...state };
    case actionTypes.GET_CINEMA_BY_ID_FAILED:
      state.loading = false;
      state.data = null;
      state.error = payload;
      return { ...state };
    default:
      return { ...state };
  }
};
