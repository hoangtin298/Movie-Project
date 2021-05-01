import { combineReducers } from "redux";
import { signInReducer } from "../containers/AdminTemplate/SignIn/modules/reducer";
import { signUpReducer } from "../containers/AdminTemplate/SignUp/modules/reducer";
import { movieListReducer } from "../components/MovieList/modules/reducer";
import { cinemaListReducer } from "../components/CinemaList/modules/reducer";
import { movieDetailReducer } from "../containers/HomeTemplate/Detail/modules/reducer";

import { currentUserReducer } from "./currentUser";

export const rootReducer = combineReducers({
  signInReducer,
  signUpReducer,
  movieListReducer,
  movieDetailReducer,
  cinemaListReducer,

  currentUserReducer,
});
