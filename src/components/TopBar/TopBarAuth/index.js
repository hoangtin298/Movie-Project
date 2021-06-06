import React, { useState } from "react";
import MyTypography from "../MyTypography";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { useStyles } from "../style";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { Button, Divider } from "@material-ui/core";
import Swal from "sweetalert2";
import Avatar from "@material-ui/core/Avatar";
import userAvatar from "../../../assets/avatarTix.jpg";
function TopBarAuth(props) {
  const classes = useStyles();
  const dispatch = useDispatch();

  const currentUser = useSelector((state) => state.currentUserReducer);

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const openMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const renderUser = () => {
    return (
      <>
        <Link
          to="/account"
          justify="flex-end"
          item
          lg={6}
          className={classes.headAuthItems}
        >
          <Avatar alt="Avatar" className={classes.authIcon} src={userAvatar} />
          <MyTypography className={classes.overflowEllipis}>
            {currentUser.hoTen}
          </MyTypography>
        </Link>
        <Divider orientation="vertical" flexItem />
        <Link
          justify="flex-end"
          item
          lg={6}
          className={classes.headAuthItems}
          onClick={() => {
            Swal.fire({
              title: "Bạn có muốn đăng xuất ?",
              showCancelButton: true,
              confirmButtonText: `Đồng ý`,
              cancelButtonText: "Hủy",
              icon: "question",
            }).then((result) => {
              if (result.isConfirmed) {
                Swal.fire({
                  title: "Đã đăng xuất",
                  text: "Cảm ơn bạn đã sử dụng TIX!",
                  icon: "success",
                  timer: "2000",
                });
                localStorage.removeItem("currentUser");
                dispatch({
                  type: "LOG-OUT",
                  payload: null,
                });
              }
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
        <Divider orientation="vertical" flexItem />
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
