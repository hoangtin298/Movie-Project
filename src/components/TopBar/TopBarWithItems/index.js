import React from "react";
import TopBar from "..";
import TopBarAuth from "../TopBarAuth";
import TopBarItems from "../TopBarItems";

function TopBarWithItems() {
  const ResultComponent = TopBar(TopBarItems, TopBarAuth);
  return <ResultComponent />;
}

export default TopBarWithItems;
