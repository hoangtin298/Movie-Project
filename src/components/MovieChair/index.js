import { Button } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";

function MovieChair(props) {
  let { data } = props;
  const bookingChairList = useSelector(
    (state) => state.bookingChairListReducer
  );
  const renderMovieChair = (data) => {
    return data.danhSachGhe.map((chair, index) => {
      let indexChair = bookingChairList.findIndex(
        (choseChair) => choseChair.maGhe === chair.maGhe
      );
      let classBookedChair = chair.daDat ? classes.bookedChair : null;
      let classVipChair = chair.loaiGhe === "Vip" ? classes.vipChair : null;
      let classChoosingChair = null;
      if (indexChair !== -1) {
        classChoosingChair = classes.choosingchair;
      }
      return (
        <Fragment>
          <Button
            disabled={chair.daDat}
            className={`${classes.chair} ${classBookedChair} ${classVipChair} ${classChoosingChair}`}
            onClick={() => {
              dispatch({
                type: "CHOOSE_CHAIR",
                choosingChair: chair,
              });
            }}
          >
            {chair.daDat ? "X" : chair.stt}
          </Button>
          {(index + 1) % 16 === 0 ? <br /> : ""}
        </Fragment>
      );
    });
  };
  return <div style={{ width: "80%", margin: "15px auto" }}></div>;
}
export default MovieChair;
