import { yupResolver } from "@hookform/resolvers/yup";
import {
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  makeStyles,
  CssBaseline,
  Select,
  TextField,
  Container,
  Typography,
  Divider,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import * as yup from "yup";
import { actGetCurrentAccountApi, actGetInfoApi } from "./modules/action";
import Button from "@material-ui/core/Button";
import { Redirect } from "react-router";
import { swalFailed, swalSuccess } from "../../../utils";
import moment from "moment";
import backgroundImg from "../../../assets/backapp.jpg";
import LoadingPage from "../../../components/LoadingPage";

const schema = yup.object().shape({
  hoTen: yup
    .string()
    .required("Đây là trường bắt buộc !")
    .matches(/^([^0-9]*)$/, "Họ và tên không chứa số !"),
  taiKhoan: yup.string().required("Đây là trường bắt buộc !"),

  email: yup.string().required("Đây là trường bắt buộc !"),
  matKhau: yup
    .string()
    .required("Đây là trường bắt buộc !")
    .min(6, "Mật khẩu phải có ít nhất 6 kí tự !"),
  soDt: yup
    .number()
    .required("Đây là trường bắt buộc !")
    .typeError("Vui lòng nhập số điện thoại"),
});

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(4),
    background: `url(${backgroundImg})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    minHeight: "100vh",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  formContainer: {
    backgroundColor: theme.palette.common.white,
    borderRadius: "4px",
  },
  formControl: {
    width: "100%",
  },
  button: {
    marginRight: "8px",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "flex-end",
  },
  headerText: {
    fontWeight: 600,
    marginBottom: theme.spacing(1),
  },
  history: {
    backgroundColor: theme.palette.common.white,
    borderRadius: "4px",
    marginTop: "40px",
    flexGrow: "1",
  },
  historyContainer: {
    display: "flex",
    width: "100%",
    flexWrap: "wrap",
  },
  historyItem: {
    position: "relative",
    display: "block",

    padding: "15px",
    "&::after": {
      position: "absolute",
      content: "''",
      display: "block",
      background: `url(${"https://tix.vn/app/assets/img/default-film.webp"})`,
      borderRadius: theme.spacing(1),
      opacity: "0.3",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: "0",
    },
  },
  linkContainer: {
    padding: theme.spacing(4),
    backgroundColor: "white",
    paddingRight: "0!important",
  },
  linkToManage: {
    color: "white",
    backgroundColor: theme.palette.primary.main,
    textDecoration: "none",
    padding: theme.spacing(1, 2),
    borderRadius: 4,
  },
  marginNe: {
    marginBottom: theme.spacing(3),
  },
}));

export default function Account() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { register, handleSubmit, errors } = useForm({
    mode: "onBlur",
    resolver: yupResolver(schema),
  });
  useEffect(() => {
    if (localStorage.getItem("currentUser")) {
      dispatch(
        actGetCurrentAccountApi(
          JSON.parse(localStorage.getItem("currentUser")).hoTen
        )
      );
      dispatch(
        actGetInfoApi(JSON.parse(localStorage.getItem("currentUser")).taiKhoan)
      );
    }
  }, []);

  const currentUser = useSelector((state) => state.accountReducer);
  const info = useSelector((state) => state.infoReducer);

  const [showPassword, setShowPassword] = useState(false);
  const [user, setUser] = useState(currentUser.data?.[0]);
  const [typeUser, settypeUser] = useState("");
  useEffect(() => {
    setUser(currentUser.data?.[0]);
    settypeUser(currentUser.data?.[0].maLoaiNguoiDung);
  }, [currentUser]);

  if (!localStorage.getItem("currentUser")) {
    return <Redirect to="/" />;
  }

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const accessToken = JSON.parse(
    localStorage.getItem("currentUser")
  ).accessToken;

  const onSaveSubmit = (user) => {
    user["maNhom"] = "GP09";
    axios({
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung`,
      method: "PUT",
      data: user,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((result) => {
        swalSuccess("Cập nhật thành công");
      })
      .catch((error) => {
        swalFailed(error);
      });
  };

  const renderHistory = (arr) => {
    return arr.map((infoArr) => {
      return (
        <Grid
          item
          xs={12}
          md={6}
          className={classes.historyContainer}
          key={infoArr.maVe}
        >
          <Grid className={classes.historyItem} container>
            <Grid item xs={12}>
              <Typography variant="h3" gutterBottom>
                Ngày đặt: {moment(infoArr.ngayDat).format("DD-MM-YYYY | HH:mm")}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography color="primary" variant="h1" gutterBottom>
                Tên phim: {infoArr.tenPhim}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                style={{ display: "inline-block" }}
                variant="h3"
                gutterBottom
              >
                Thời lượng: {infoArr.thoiLuongPhim} phút
              </Typography>
              {", "}
              <Typography
                style={{ display: "inline-block" }}
                variant="h3"
                gutterBottom
              >
                Giá vé: {infoArr.giaVe} VND
              </Typography>
            </Grid>

            <Grid item xs={12}>
              <Typography color="secondary" variant="h1" gutterBottom>
                {infoArr.danhSachGhe[0].tenHeThongRap}
              </Typography>
            </Grid>
            {/* key = maRap */}
            <Grid item xs={12}>
              <Typography
                variant="h3"
                gutterBottom
                style={{ display: "inline-block" }}
              >
                {infoArr.danhSachGhe[0].tenRap}
              </Typography>
              {",  "}
              <Typography
                variant="h3"
                gutterBottom
                style={{ display: "inline-block" }}
              >
                Ghế số:{" "}
                {infoArr.danhSachGhe.map((item) => {
                  return item.tenGhe + " ";
                })}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      );
    });
  };

  return (
    <div className={classes.root}>
      {currentUser.loading ? (
        <LoadingPage />
      ) : (
        <Container component="main" maxWidth="md">
          <CssBaseline />
          {typeUser === "QuanTri" ? (
            <Grid
              container
              alignItems="flex-end"
              justify="flex-end"
              spacing={4}
              className={classes.marginNe}
            >
              <Grid item xs={2} className={classes.linkContainer}>
                <Link to="/manage-user" className={classes.linkToManage}>
                  Trang Quản Lý
                </Link>
              </Grid>
            </Grid>
          ) : null}
          {user && (
            <form className={classes.form} noValidate>
              <Grid className={classes.formContainer} container spacing={3}>
                <Grid item xs={12}>
                  <Typography variant="h1" className={classes.headerText}>
                    Cài đặt tài khoản chung
                  </Typography>
                  <Typography variant="h4">
                    Thông tin có thể được thay đổi
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Divider />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="taiKhoan"
                    label="Tài Khoản"
                    name="taiKhoan"
                    autoComplete="taiKhoan"
                    inputRef={register}
                    error={!!errors.taiKhoan}
                    helperText={errors?.taiKhoan?.message}
                    value={user.taiKhoan}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="matKhau"
                    label="Mật Khẩu"
                    type="password"
                    id="matKhau"
                    autoComplete="current-password"
                    inputRef={register}
                    error={!!errors.matKhau}
                    helperText={errors?.matKhau?.message}
                    type={showPassword ? "text" : "password"}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {showPassword ? <Visibility /> : <VisibilityOff />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                    value={user.matKhau}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="hoTen"
                    label="Họ Tên"
                    name="hoTen"
                    autoComplete="hoTen"
                    inputRef={register}
                    error={!!errors.hoTen}
                    helperText={errors?.hoTen?.message}
                    value={user.hoTen}
                    onChange={handleChange}
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="email"
                    label="Email"
                    name="email"
                    autoComplete="email"
                    inputRef={register}
                    error={!!errors.email}
                    helperText={errors?.email?.message}
                    value={user.email}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="soDt"
                    label="Số điện thoại"
                    name="soDt"
                    autoComplete="soDt"
                    inputRef={register}
                    error={!!errors.soDt}
                    helperText={errors?.soDt?.message}
                    value={user.soDt}
                    onChange={handleChange}
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <FormControl
                    variant="outlined"
                    className={classes.formControl}
                  >
                    <InputLabel htmlFor="outlined-age-native-simple">
                      Mã Loại Người Dùng
                    </InputLabel>
                    <Select
                      native
                      value={user.maLoaiNguoiDung}
                      label="Mã Loại Người Dùng"
                      inputProps={{
                        name: "maLoaiNguoiDung",
                        id: "outlined-age-native-simple",
                      }}
                      inputRef={register}
                    >
                      <option value={"KhachHang"}>Khách Hàng</option>
                      <option value={"QuanTri"}>Quản Trị</option>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <Divider />
                </Grid>
                <Grid className={classes.buttonContainer} item xs={12}>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleSubmit(onSaveSubmit)}
                  >
                    Cập Nhật
                  </Button>
                </Grid>
              </Grid>
            </form>
          )}
          <Grid container spacing={3} className={classes.history}>
            <Grid
              item
              xs={12}
              style={{
                paddingBottom: "0px",
              }}
            >
              <Typography variant="h1" className={classes.headerText}>
                Lịch sử đặt vé
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Divider />
            </Grid>
            {info.data && renderHistory(info.data.thongTinDatVe)}
          </Grid>
        </Container>
      )}
    </div>
  );
}
