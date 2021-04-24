import Dashboard from "../containers/AdminTemplate/Dashboard";
import SignIn from "../containers/HomeTemplate/SignIn";
import SignUp from "../containers/HomeTemplate/SignUp";
import Home from "../containers/HomeTemplate/Home";

const routeHome = [
  {
    exact: true,
    path: "/",
    component: Home,
  },
  {
    exact: false,
    path: "/sign-in",
    component: SignIn,
  },
  {
    exact: false,
    path: "/sign-up",
    component: SignUp,
  },
];

const routeAdmin = [
  {
    exact: true,
    path: "/dashboard",
    component: Dashboard,
  },
];

export { routeHome, routeAdmin };
