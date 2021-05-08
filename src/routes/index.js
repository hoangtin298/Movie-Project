import Dashboard from "../containers/AdminTemplate/Dashboard";
import SignIn from "../containers/HomeTemplate/SignIn";
import SignUp from "../containers/HomeTemplate/SignUp";
import Detail from "../containers/HomeTemplate/Detail";
import Home from "../containers/HomeTemplate/Home";
import ManageUser from "../containers/AdminTemplate/ManageUser";

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
  {
    exact: false,
    path: "/manage-user",
    component: ManageUser,
  },
];

export { routeHome, routeAdmin };
