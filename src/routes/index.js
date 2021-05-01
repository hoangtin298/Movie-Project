import Dashboard from "../containers/AdminTemplate/Dashboard";
import SignIn from "../containers/AdminTemplate/SignIn";
import SignUp from "../containers/AdminTemplate/SignUp";
import Detail from "../containers/HomeTemplate/Detail";
import Home from "../containers/HomeTemplate/Home";

const routeHome = [
  {
    exact: true,
    path: "/",
    component: Home,
  },
  {
    exact: false,
    path: "/detail/:id",
    component: Detail,
  },
];

const routeAdmin = [
  {
    exact: true,
    path: "/dashboard",
    component: Dashboard,
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

export { routeHome, routeAdmin };
