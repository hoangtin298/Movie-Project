import React from "react";
import { useHistory } from "react-router";
import logo from "../../assets/tix-logo.png";

const Logo = (props) => {
  const history = useHistory();
  return (
    <img
      src={logo}
      alt="Logo"
      {...props}
      onClick={() => {
        history.push("/");
      }}
    />
  );
};

export default Logo;
