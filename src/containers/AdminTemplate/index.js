import { makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import { Redirect, Route } from "react-router";
import NavBarAdmin from "../../components/NavbarAdmin";
import TopBarAdmin from "../../components/TopBarAdmin";

const useStyles = makeStyles((theme) => ({
  layout: {
    paddingLeft: "256px",
    [theme.breakpoints.down("md")]: {
      paddingLeft: 0,
    },
  },
}));

const LayoutAdmin = (props) => {
  const classes = useStyles();
  const [openDrawer, setOpenDrawer] = useState(false);

  if (!localStorage.getItem("currentUser")) {
    return <Redirect to="/" />;
  }

  if (
    JSON.parse(localStorage.getItem("currentUser")).maLoaiNguoiDung !==
    "QuanTri"
  ) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <TopBarAdmin openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
      <NavBarAdmin openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
      <div className={classes.layout}>{props.children}</div>
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
