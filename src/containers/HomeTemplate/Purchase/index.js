import {
  Container,
  Divider,
  Grid,
  Paper,
  Typography,
  Button,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { actGetMovieShowtimesApi, actBookTicket } from "./modules/action";
import { useDispatch, useSelector } from "react-redux";
import { useStyles } from "./style";
import Spinner from "react-spinner-material";
import { Fragment } from "react";
import { CURRENTUSER } from "./modules/newconstant";
function Purchase(props) {
  const renderLoading = () => {
    return (
      <div
        style={{
          height: "30vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderColor: "#0ff",
        }}
      >
        <Spinner
          size={120}
          spinnerColor={"#00f"}
          spinnerWidth={1}
          visible={true}
        />
      </div>
    );
  };
  const movieShowtimes = useSelector((state) => state.movieShowtimesReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    let showtimesID = props.match.params.maLichChieu;
    dispatch(actGetMovieShowtimesApi(showtimesID));
  }, []);
  const [num, setnum] = useState(0);
  const chairRowArray = ["A", "B", "C", "D", "E", "F", "G", "H", "J", "K"];
  const renderChairRow = (index) => {
    return (
      <div className={classes.rowChairContainer}>
        <Typography className={classes.rowChairName}>
          {chairRowArray[index]}
        </Typography>
      </div>
    );
  };
  const renderMovieChair = (data) => {
    return data.danhSachGhe.map((chair, index) => {
      let indexChair = movieShowtimes.bookingChairList.findIndex(
        (choseChair) => choseChair.maGhe === chair.maGhe
      );
      let classBookedChair = chair.daDat ? classes.bookedChair : null;
      let classVipChair = chair.loaiGhe === "Vip" ? classes.vipChair : null;
      let classChoosingChair = "";
      if (indexChair !== -1) {
        classChoosingChair = "green";
        console.log(classChoosingChair, "aa");
      }
      return (
        <Fragment>
          <Button
            disabled={chair.daDat}
            className={`${classes.chair} ${classBookedChair} ${classVipChair}`}
            style={{ backgroundColor: `${classChoosingChair}` }}
            onClick={() => {
              dispatch({
                type: "CHOOSE_CHAIR",
                payload: chair,
              });
            }}
          >
            {chair.daDat ? "X" : chair.stt}
          </Button>
          {/* {(index + 1) % 16 === 0 ? renderChairRow(num) : ""} */}
          {(index + 1) % 16 === 0 ? <br /> : ""}
        </Fragment>
      );
    });
  };
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {movieShowtimes.loading ? (
        renderLoading()
      ) : (
        <Grid container>
          <Grid item xs={8}>
            <div className={classes.chairContainer}>
              <img
                style={{ width: "100%" }}
                src="https://tix.vn/app/assets/img/icons/screen.png"
              />
              <div style={{ width: "79.9%", margin: "0 auto" }}>
                {movieShowtimes.data
                  ? renderMovieChair(movieShowtimes.data)
                  : null}
              </div>
              <div className={classes.demoChairContainer}>
                <div className={classes.demoChairGroup}>
                  <Button
                    disabled={true}
                    className={`${classes.chair} ${classes.bookedChair} ${classes.demoChair}`}
                  >
                    X
                  </Button>
                  <Typography>Đã đặt</Typography>
                </div>
                <div className={classes.demoChairGroup}>
                  <Button
                    disabled={true}
                    className={`${classes.chair} ${classes.demoChair}`}
                  ></Button>
                  <Typography>Thường</Typography>
                </div>
                <div className={classes.demoChairGroup}>
                  <Button
                    disabled={true}
                    className={`${classes.chair} ${classes.vipChair} ${classes.demoChair}`}
                  ></Button>

                  <Typography>Vip</Typography>
                </div>
              </div>
            </div>
          </Grid>
          {movieShowtimes.data ? (
            <Grid item xs={4}>
              <div className={classes.datveBox}>
                <div className={classes.sectionSpacing}>
                  <Typography
                    style={{
                      color: "#8bc34a",
                      fontSize: "35px",
                      textAlign: "center",
                    }}
                  >
                    {movieShowtimes.bookingChairList.reduce(
                      (tongTien, gheDD, index) => {
                        return (tongTien += gheDD.giaVe);
                      },
                      0
                    )}{" "}
                    VND
                  </Typography>
                </div>
                <Divider variant="middle" />
                <div
                  className={`${classes.sectionSpacing} ${classes.flexInfo}`}
                >
                  <Typography variant="h3">Cụm Rạp:</Typography>
                  <Typography variant="h3" className={classes.spanInfo}>
                    {movieShowtimes.data.thongTinPhim.tenCumRap}
                  </Typography>
                </div>
                <Divider variant="middle" />
                <div
                  className={`${classes.sectionSpacing} ${classes.flexInfo}`}
                >
                  <Typography variant="h3">Địa chỉ:</Typography>
                  <Typography
                    variant="h3"
                    className={`${classes.spanInfo} ${classes.textElipsis}`}
                  >
                    {movieShowtimes.data.thongTinPhim.diaChi}
                  </Typography>
                </div>
                <Divider variant="middle" />
                <div
                  className={`${classes.sectionSpacing} ${classes.flexInfo}`}
                >
                  <Typography variant="h3">Rạp:</Typography>
                  <Typography variant="h3" className={classes.spanInfo}>
                    {movieShowtimes.data.thongTinPhim.tenRap}
                  </Typography>
                </div>
                <Divider variant="middle" />
                <div
                  className={`${classes.sectionSpacing} ${classes.flexInfo}`}
                >
                  <Typography variant="h3">Ngày giờ chiếu:</Typography>
                  <Typography variant="h3" className={classes.spanInfo}>
                    {movieShowtimes.data.thongTinPhim.ngayChieu} -{" "}
                    <span style={{ color: "red" }}>
                      {movieShowtimes.data.thongTinPhim.gioChieu}
                    </span>
                  </Typography>
                </div>
                <Divider variant="middle" />
                <div
                  className={`${classes.sectionSpacing} ${classes.flexInfo}`}
                >
                  <Typography variant="h3">Tên Phim:</Typography>
                  <Typography variant="h3" className={classes.spanInfo}>
                    {movieShowtimes.data.thongTinPhim.tenPhim}
                  </Typography>
                </div>
                <Divider variant="middle" />
                <div
                  className={`${classes.sectionSpacing} ${classes.flexInfo}`}
                >
                  <Typography variant="h3">Chọn: </Typography>
                  <Typography variant="h3" className={classes.spanInfo}>
                    {movieShowtimes.bookingChairList.map((bookChair, index) => {
                      return <span>Ghế {bookChair.stt}, </span>;
                    })}
                  </Typography>
                </div>
                <Divider variant="middle" />
                <Button
                  onClick={() => {
                    let userLogin = JSON.parse(
                      localStorage.getItem(CURRENTUSER)
                    );
                    let objectAPI = {
                      maLichChieu: props.match.params.maLichChieu,
                      danhSachVe: movieShowtimes.bookingChairList,
                      taiKhoanNguoiDung: userLogin.taiKhoan,
                    };
                    console.log(objectAPI);
                    const action = actBookTicket(objectAPI);
                    dispatch(action);
                  }}
                  className={classes.buttonPurchase}
                >
                  ĐẶT VÉ
                </Button>
              </div>
            </Grid>
          ) : null}
        </Grid>
      )}
    </div>
  );
}
export default Purchase;
