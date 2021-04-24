const initialState = null;

export const currentUserReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "LOGGED_IN":
      state = payload;
      return { ...state };
    case "LOG-OUT":
      state = payload;
      return { ...state };
    default:
      return { ...state };
  }
};
