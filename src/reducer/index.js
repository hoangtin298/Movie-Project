import { combineReducers } from "redux";
import { signInReducer } from "../containers/HomeTemplate/SignIn/modules/reducer";
import { signUpReducer } from "../containers/HomeTemplate/SignUp/modules/reducer";
import { movieListReducer } from "../components/MovieList/modules/reducer";
import { cinemaListReducer } from "../components/CinemaList/modules/reducer";
import { movieDetailReducer } from "../containers/HomeTemplate/Detail/modules/reducer";
import { userPagingReducer } from "../containers/AdminTemplate/ManageUser/modules/reducer";

import { currentUserReducer } from "./currentUser";

export const rootReducer = combineReducers({
  signInReducer,
  signUpReducer,
  movieListReducer,
  movieDetailReducer,
  cinemaListReducer,

  userPagingReducer,

  currentUserReducer,
});
