import React from "react";
import MyTypography from "../MyTypography";
import { data } from "./data";
import { Link } from "react-scroll";
function TopBarItems(props) {
  return data.map((item) => {
    return (
      <Link to={item.id} smooth={true} duration={1000} offset={-50}>
        <MyTypography key={item.id} {...props}>
          {item.name}
        </MyTypography>
      </Link>
    );
  });
}

export default TopBarItems;
