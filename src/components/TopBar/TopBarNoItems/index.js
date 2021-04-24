import React from "react";
import TopBar from "..";
import TopBarAuth from "../TopBarAuth";
import EmptyComponent from "../../EmptyComponent";

function TopBarNoItems() {
  const ResultComponent = TopBar(EmptyComponent, TopBarAuth);
  return <ResultComponent />;
}

export default TopBarNoItems;
