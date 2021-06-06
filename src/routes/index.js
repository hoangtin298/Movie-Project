import SignIn from "../containers/HomeTemplate/SignIn";
import SignUp from "../containers/HomeTemplate/SignUp";
import Detail from "../containers/HomeTemplate/Detail";
import Purchase from "../containers/HomeTemplate/Purchase";
import Home from "../containers/HomeTemplate/Home";
import ManageUser from "../containers/AdminTemplate/ManageUser";
import Account from "../containers/HomeTemplate/Account";
import ManageMovie from "../containers/AdminTemplate/ManageMovie";

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
    path: "/sign-in",
    component: SignIn,
  },
  {
    exact: false,
    path: "/sign-up",
    component: SignUp,
  },
  {
    exact: false,
    path: "/purchase/:maLichChieu",
    component: Purchase,
  },
  {
    exact: false,
    path: "/account",
    component: Account,
  },
];

const routeAdmin = [
  {
    exact: false,
    path: "/manage-user",
    component: ManageUser,
  },
  {
    exact: false,
    path: "/manage-movie",
    component: ManageMovie,
  },
];

export { routeHome, routeAdmin };
