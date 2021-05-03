import React from "react";
import { useHistory } from "react-router";
import logo from "../../assets/tix-logo.png";
import { animateScroll } from "react-scroll";
const Logo = (props) => {
  const history = useHistory();
  return (
    <img
      src={logo}
      alt="Logo"
      {...props}
      onClick={() => {
        animateScroll.scrollToTop();
      }}
    />
  );
};

export default Logo;
