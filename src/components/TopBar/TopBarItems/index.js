import React, { useEffect, useState } from "react";
import MyTypography from "../MyTypography";
// import { data } from "./data";
import { Link } from "react-scroll";
import { Link as RouteLink } from "react-router-dom";
import { useLocation, useHistory } from "react-router-dom";
import { useStyles } from "../style";
import { useSelector } from "react-redux";

function TopBarItems(props) {
  const location = useLocation();
  const history = useHistory();
  const classes = useStyles();
  const [data, setData] = useState([]);
  const currentUser = useSelector((state) => state.currentUserReducer);
  useEffect(() => {
    if (
      JSON.parse(localStorage.getItem("currentUser")) &&
      JSON.parse(localStorage.getItem("currentUser")).maLoaiNguoiDung ===
        "QuanTri"
    ) {
      setData([
        {
          name: "Lịch Chiếu",
          id: "lichChieu",
        },
        {
          name: "Cụm Rạp",
          id: "cumRap",
        },
        {
          name: "Tin Tức",
          id: "tinTuc",
        },
        {
          name: "Ứng Dụng",
          id: "ungDung",
        },
        {
          name: "Quản Lý",
          id: "manage-user",
        },
      ]);
    } else {
      setData([
        {
          name: "Lịch Chiếu",
          id: "lichChieu",
        },
        {
          name: "Cụm Rạp",
          id: "cumRap",
        },
        {
          name: "Tin Tức",
          id: "tinTuc",
        },
        {
          name: "Ứng Dụng",
          id: "ungDung",
        },
      ]);
    }
  }, [currentUser]);

  const handleClick = () => {
    if (location.pathname !== "/") {
      history.push("/");
    }
  };

  return data.map((item) => {
    if (item.id === "manage-user") {
      return (
        <RouteLink className={classes.headDataItems} to={item.id}>
          <MyTypography variant="h4">{item.name}</MyTypography>
        </RouteLink>
      );
    }
    return (
      <Link
        onClick={handleClick}
        key={item.id}
        {...props}
        to={item.id}
        smooth={true}
        duration={1000}
        offset={-60}
        spy={true}
      >
        <MyTypography variant="h4">{item.name}</MyTypography>
      </Link>
    );
  });
}

export default TopBarItems;
