import React from "react";
import MyTypography from "../MyTypography";
import { data } from "./data";
import { Link } from "react-scroll";
import { Link as RouteLink } from "react-router-dom";
import { useLocation, useHistory } from "react-router-dom";
import { useStyles } from "../style";

function TopBarItems(props) {
  const location = useLocation();
  const history = useHistory();
  const classes = useStyles();

  const handleClick = () => {
    if (location.pathname !== "/") {
      history.push("/");
    }
  };
  return data.map((item) => {
    if (item.id === "dashboard") {
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
        offset={-50}
        spy={true}
      >
        <MyTypography variant="h4">{item.name}</MyTypography>
      </Link>
    );
  });
}

export default TopBarItems;
