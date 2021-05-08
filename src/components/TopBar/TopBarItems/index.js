import React from "react";
import MyTypography from "../MyTypography";
import { data } from "./data";
import { Link, ScrollLink } from "react-scroll";
import { useLocation, useHistory } from "react-router-dom";

function TopBarItems(props) {
  const location = useLocation();
  const history = useHistory();

  const handleClick = () => {
    if (location.pathname !== "/") {
      history.push("/");
    }
  };
  return data.map((item) => {
    return (
      <Link
        onClick={handleClick}
        key={item.id}
        {...props}
        to={item.id}
        smooth={true}
        duration={1000}
        offset={-50}
        spy={true}
      >
        <MyTypography>{item.name}</MyTypography>
      </Link>
    );
  });
}

export default TopBarItems;
