import Dashboard from "../containers/AdminTemplate/Dashboard";
import SignIn from "../containers/AdminTemplate/SignIn";
import SignUp from "../containers/AdminTemplate/SignUp";
import Detail from "../containers/HomeTemplate/Detail";
import Purchase from "../containers/HomeTemplate/Purchase";
import Home from "../containers/HomeTemplate/Home";

const routeHome = [
  {
    exact: true,
    path: "/",
    component: Home,
  },
  {
    exact: false,
    path: "/detail/:maPhim",
    component: Detail,
  },
  {
    exact: false,
    path: "/purchase",
    component: Purchase,
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
