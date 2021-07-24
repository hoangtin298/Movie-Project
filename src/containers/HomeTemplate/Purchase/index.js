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
import LoadingPage from "../../../components/LoadingPage";
import Swal from "sweetalert2";
import { useHistory } from "react-router";

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
  const history = useHistory();
  useEffect(() => {
    let showtimesID = props.match.params.maLichChieu;
    dispatch(actGetMovieShowtimesApi(showtimesID));
  }, []);

  const [num, setnum] = useState(0);
  const [flag, setFlag] = useState(false);
  const [totalMoney, setTotalMoney] = useState(0);
  const [selectedChair, setSelectedChair] = useState(null);
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
        <LoadingPage />
      ) : (
        <Grid container>
          <Grid item xs={12} sm={12} md={8}>
            <div className={classes.chairContainer}>
              <img
                style={{ width: "100%" }}
                src="https://tix.vn/app/assets/img/icons/screen.png"
              />
              <div className={classes.chairArea}>
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
                  <Typography className={classes.fontResponsive}>
                    Đã đặt
                  </Typography>
                </div>
                <div className={classes.demoChairGroup}>
                  <Button
                    disabled={true}
                    className={`${classes.chair} ${classes.demoChair}`}
                  ></Button>
                  <Typography className={classes.fontResponsive}>
                    Thường
                  </Typography>
                </div>
                <div className={classes.demoChairGroup}>
                  <Button
                    disabled={true}
                    className={`${classes.chair} ${classes.vipChair} ${classes.demoChair}`}
                  ></Button>

                  <Typography className={classes.fontResponsive}>
                    Vip
                  </Typography>
                </div>
              </div>
            </div>
          </Grid>
          {movieShowtimes.data ? (
            <Grid item xs={12} sm={12} md={4}>
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
                  <Typography
                    variant="h3"
                    className={classes.fontResponsiveReceipt}
                  >
                    Cụm Rạp:
                  </Typography>
                  <Typography variant="h3" className={classes.spanInfo}>
                    {movieShowtimes.data.thongTinPhim.tenCumRap}
                  </Typography>
                </div>
                <Divider variant="middle" />
                <div
                  className={`${classes.sectionSpacing} ${classes.flexInfo}`}
                >
                  <Typography
                    variant="h3"
                    className={classes.fontResponsiveReceipt}
                  >
                    Địa chỉ:
                  </Typography>
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
                  <Typography
                    variant="h3"
                    className={classes.fontResponsiveReceipt}
                  >
                    Rạp:
                  </Typography>
                  <Typography variant="h3" className={classes.spanInfo}>
                    {movieShowtimes.data.thongTinPhim.tenRap}
                  </Typography>
                </div>
                <Divider variant="middle" />
                <div
                  className={`${classes.sectionSpacing} ${classes.flexInfo}`}
                >
                  <Typography
                    variant="h3"
                    className={classes.fontResponsiveReceipt}
                  >
                    Ngày giờ chiếu:
                  </Typography>
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
                  <Typography
                    variant="h3"
                    className={classes.fontResponsiveReceipt}
                  >
                    Tên Phim:
                  </Typography>
                  <Typography variant="h3" className={classes.spanInfo}>
                    {movieShowtimes.data.thongTinPhim.tenPhim}
                  </Typography>
                </div>
                <Divider variant="middle" />
                <div
                  className={`${classes.sectionSpacing} ${classes.flexInfo}`}
                >
                  <Typography
                    variant="h3"
                    className={classes.fontResponsiveReceipt}
                  >
                    Chọn:{" "}
                  </Typography>
                  <Typography variant="h3" className={classes.spanInfo}>
                    {movieShowtimes.bookingChairList.map((bookChair, index) => {
                      return <span>Ghế {bookChair.stt}, </span>;
                    })}
                  </Typography>
                </div>
                <Divider variant="middle" />
                <Button
                  onClick={() => {
                    if (!localStorage.getItem(CURRENTUSER)) {
                      Swal.fire({
                        icon: "error",
                        title: "Bạn chưa đăng nhập",
                        text: "Bạn có muốn đăng nhập không ?",
                        confirmButtonText: "Đồng ý",
                        showDenyButton: true,
                        denyButtonText: "Không",
                      }).then((result) => {
                        if (result.isConfirmed) {
                          history.push("/sign-in");
                        }
                      });
                      return;
                    }
                    if (movieShowtimes.bookingChairList.length === 0) {
                      Swal.fire({
                        icon: "error",
                        title: "Bạn chưa chọn ghế",
                        text: "Vui lòng chọn ghế ?",
                        confirmButtonText: "Đã hiểu",
                      });
                      return;
                    }
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
                    Swal.fire({
                      icon: "success",
                      title: "Đặt vé thành công",
                      text: "Kiểm tra trong lịch sử đặt vé",
                      confirmButtonText: "Đồng ý",
                    }).then((result) => {
                      if (result.isConfirmed) {
                        dispatch(
                          actGetMovieShowtimesApi(
                            props.match.params.maLichChieu
                          )
                        );
                      } else {
                        dispatch(
                          actGetMovieShowtimesApi(
                            props.match.params.maLichChieu
                          )
                        );
                      }
                    });
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
