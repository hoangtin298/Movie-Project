import React from "react";
import { Route } from "react-router";
import TopBarWithItems from "../../components/TopBar/TopBarWithItems";

const LayoutHome = (props) => {
  return (
    <>
      <TopBarWithItems />
      {props.children}
    </>
  );
};

const HomeTemplate = (props) => {
  return (
    // <Route
    //   {...props}
    //   render={(propsComponent) => {
    //     <LayoutHome>
    //       <Component {...propsComponent} />
    //     </LayoutHome>;
    //   }}
    // />
    <LayoutHome>
      <Route
        exact={props.exact}
        path={props.path}
        component={props.component}
      />
    </LayoutHome>
  );
};

export default HomeTemplate;
