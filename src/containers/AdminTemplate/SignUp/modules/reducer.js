import * as actionTypes from "./constant";

const initialState = {
  loading: false,
  data: null,
  error: null,
};

export const signUpReducer = (
  state = initialState,
  { type, payload, ...action }
) => {
  switch (type) {
    case actionTypes.SIGN_UP_REQUEST:
      state.loading = true;
      state.data = null;
      state.error = null;
      return { ...state };
    case actionTypes.SIGN_UP_SUCCESS:
      state.loading = false;
      state.data = payload;
      state.error = null;
      return { ...state };
    case actionTypes.SIGN_UP_FAILED:
      state.loading = false;
      state.data = null;
      state.error = payload;
      return { ...state };
    default:
      return { ...state };
  }
};
