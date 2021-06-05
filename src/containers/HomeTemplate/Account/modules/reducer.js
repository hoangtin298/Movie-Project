import * as actionTypes from "./constant";

const initialStateAccount = {
  loading: false,
  data: null,
  error: null,
};

const initialStateInfo = {
  loading: false,
  data: null,
  error: null,
};

export const accountReducer = (
  state = initialStateAccount,
  { type, payload }
) => {
  switch (type) {
    case actionTypes.GET_CURRENT_ACCOUNT_REQUEST:
      state.loading = true;
      state.data = null;
      state.error = null;
      return { ...state };
    case actionTypes.GET_CURRENT_ACCOUNT_SUCCESS:
      state.loading = false;
      state.data = payload;
      state.error = null;
      return { ...state };
    case actionTypes.GET_CURRENT_ACCOUNT_FAILED:
      state.loading = false;
      state.data = null;
      state.error = payload;
      return { ...state };
    default:
      return { ...state };
  }
};

export const infoReducer = (state = initialStateInfo, { type, payload }) => {
  switch (type) {
    case actionTypes.GET_INFO_REQUEST:
      state.loading = true;
      state.data = null;
      state.error = null;
      return { ...state };
    case actionTypes.GET_INFO_SUCCESS:
      state.loading = false;
      state.data = payload;
      state.error = null;
      return { ...state };
    case actionTypes.GET_INFO_FAILED:
      state.loading = false;
      state.data = null;
      state.error = payload;
      return { ...state };
    default:
      return { ...state };
  }
};
