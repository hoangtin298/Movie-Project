import { combineReducers } from "redux";
import { signInReducer } from "../containers/AdminTemplate/SignIn/modules/reducer";
import { signUpReducer } from "../containers/AdminTemplate/SignUp/modules/reducer";
import { movieListReducer } from "../components/MovieList/modules/reducer";
import { cinemaListReducer } from "../components/CinemaList/modules/reducer";

import { currentUserReducer } from "./currentUser";

export const rootReducer = combineReducers({
  signInReducer,
  signUpReducer,
  movieListReducer,
  cinemaListReducer,
  currentUserReducer,
});
