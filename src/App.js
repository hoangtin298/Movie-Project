import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AdminTemplate from "./containers/AdminTemplate";
import HomeTemplate from "./containers/HomeTemplate";
import { routeAdmin, routeHome } from "./routes";
import PageNotFound from "./containers/PageNotFound";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("App render ");
    if (localStorage.getItem("currentUser")) {
      dispatch({
        type: "LOGGED_IN",
        payload: JSON.parse(localStorage.getItem("currentUser")),
      });
    }
  }, []);

  const showLayoutAdmin = (routes) => {
    if (routes && routes.length > 0) {
      return routes.map((item, index) => {
        return (
          <AdminTemplate
            key={index}
            exact={item.exact}
            path={item.path}
            component={item.component}
          />
        );
      });
    }
  };

  const showLayoutHome = (routes) => {
    if (routes && routes.length > 0) {
      return routes.map((item, index) => {
        return (
          <HomeTemplate
            key={index}
            exact={item.exact}
            path={item.path}
            component={item.component}
          />
        );
      });
    }
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          {showLayoutAdmin(routeAdmin)}

          {showLayoutHome(routeHome)}

          {/* Không tìm ra trang nào */}
          <Route path="" component={PageNotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
