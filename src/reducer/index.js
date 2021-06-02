import { combineReducers } from "redux";
import { signInReducer } from "../containers/HomeTemplate/SignIn/modules/reducer";
import { signUpReducer } from "../containers/HomeTemplate/SignUp/modules/reducer";
import { movieListReducer } from "../components/MovieList/modules/reducer";
import { cinemaListReducer } from "../components/CinemaList/modules/reducer";
import { cinemaByIdReducer } from "../components/CinemaList/modules/reducer";
import { movieDetailReducer } from "../containers/HomeTemplate/Detail/modules/reducer";
import { userPagingReducer } from "../containers/AdminTemplate/ManageUser/modules/reducer";

import { currentUserReducer } from "./currentUser";
import { accountReducer } from "../containers/HomeTemplate/Account/modules/reducer";

import { moviePagingReducer } from "../containers/AdminTemplate/ManageMovie/modules/reducer";

export const rootReducer = combineReducers({
  signInReducer,
  signUpReducer,
  movieListReducer,
  movieDetailReducer,
  cinemaListReducer,
  cinemaByIdReducer,

  userPagingReducer,

  currentUserReducer,
  accountReducer,

  moviePagingReducer,
});
