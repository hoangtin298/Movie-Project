import React from "react";
import MyTypography from "../MyTypography";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { useStyles } from "../style";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
function TopBarAuth(props) {
  const classes = useStyles();
  const dispatch = useDispatch();

  const currentUser = useSelector((state) => state.currentUserReducer);

  const renderUser = () => {
    return (
      <>
        <Link justify="flex-end" item lg={6} className={classes.headAuthItems}>
          <AccountCircleIcon fontSize="large" className={classes.authIcon} />
          <MyTypography className={classes.overflowEllipis}>
            {currentUser.email}
          </MyTypography>
        </Link>

        <Link
          justify="flex-end"
          item
          lg={6}
          className={classes.headAuthItems}
          onClick={() => {
            localStorage.removeItem("currentUser");
            dispatch({
              type: "LOG-OUT",
              payload: null,
            });
          }}
        >
          <ExitToAppIcon fontSize="large" className={classes.authIcon} />
          <MyTypography>Đăng xuất</MyTypography>
        </Link>
      </>
    );
  };

  const renderAuth = () => {
    return (
      <>
        <Link
          to="/sign-in"
          justify="flex-end"
          className={classes.headAuthItems}
          item
          lg={6}
        >
          <AccountCircleIcon fontSize="large" className={classes.authIcon} />
          <MyTypography>Đăng Nhập</MyTypography>
        </Link>

        <Link
          to="/sign-up"
          justify="flex-end"
          className={classes.headAuthItems}
          item
          lg={6}
        >
          <AccountCircleIcon fontSize="large" className={classes.authIcon} />
          <MyTypography>Đăng Ký</MyTypography>
        </Link>
      </>
    );
  };

  return currentUser.email ? renderUser() : renderAuth();
}

export default TopBarAuth;
