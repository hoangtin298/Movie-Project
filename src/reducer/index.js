import { combineReducers } from "redux";
import { signInReducer } from "../containers/HomeTemplate/SignIn/modules/reducer";
import { signUpReducer } from "../containers/HomeTemplate/SignUp/modules/reducer";
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
