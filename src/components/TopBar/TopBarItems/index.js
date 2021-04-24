import React from "react";
import MyTypography from "../MyTypography";
import { data } from "./data";

function TopBarItems(props) {
  return data.map((item) => {
    return (
      <MyTypography key={item.id} {...props}>
        {item.name}
      </MyTypography>
    );
  });
}

export default TopBarItems;
