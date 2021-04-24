import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actGetCinemaListApi } from "./modules/action";
function CinemaList() {
  const dispatch = useDispatch();
  const cinemaList = useSelector((state) => state.cinemaListReducer);
  useEffect(() => {
    dispatch(actGetCinemaListApi());
  }, []);
  return <div>123</div>;
}

export default CinemaList;
