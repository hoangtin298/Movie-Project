import React from "react";
import { Route } from "react-router";
import TopBarNoItems from "../../components/TopBar/TopBarNoItems";
const LayoutAdmin = (props) => {
  return (
    <>
      <TopBarNoItems />
      {props.children}
    </>
  );
};

const AdminTemplate = ({ Component, ...props }) => {
  return (
    <LayoutAdmin>
      <Route
        exact={props.exact}
        path={props.path}
        component={props.component}
      />
    </LayoutAdmin>
  );
};

export default AdminTemplate;
