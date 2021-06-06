import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { useStyles } from "./style";
import Container from "@material-ui/core/Container";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { actSignUpApi } from "./modules/action";
import { Link } from "react-router-dom";
import Alert from "@material-ui/lab/Alert";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { useState } from "react";
import { IconButton, InputAdornment } from "@material-ui/core";
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
  confirmPassWord: yup
    .string()
    .required("Đây là trường bắt buộc !")
    .oneOf([yup.ref("matKhau")], "Mật khẩu không khớp !"),
});

const SignUp = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const signUpReducer = useSelector((state) => state.signUpReducer);
  const { register, handleSubmit, errors } = useForm({
    mode: "onBlur",
    resolver: yupResolver(schema),
  });
  const [showPassword, setShowPassword] = useState(false);
  const onSubmit = (data) => {
    data["maNhom"] = "GP09";
    data["maLoaiNguoiDung"] = "KhachHang";
    dispatch(actSignUpApi(data));
  };
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <div className={classes.root}>
      <Container
        component="main"
        maxWidth="xs"
        className={classes.formContainer}
      >
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h1">
            Đăng ký
          </Typography>
          <form
            className={classes.form}
            onSubmit={handleSubmit(onSubmit)}
            noValidate
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
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
                />
              </Grid>
              <Grid item xs={12}>
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
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="confirmPassWord"
                  label="Nhập lại mật khẩu"
                  type="password"
                  id="confirmPassWord"
                  autoComplete="current-password"
                  inputRef={register}
                  error={!!errors.confirmPassWord}
                  helperText={errors?.confirmPassWord?.message}
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
                />
              </Grid>
              <Grid item xs={12}>
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
                />
              </Grid>
              <Grid item xs={12}>
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
                />
              </Grid>
            </Grid>

            {/* In ra loi neu dang nhap that bai */}
            {signUpReducer.error ? (
              <Alert severity="error" className={classes.alert}>
                {signUpReducer.error.response.data}
              </Alert>
            ) : null}

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Đăng ký
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link to="/sign-in">
                  <Typography variant="h3">
                    Bạn đã có tài khoản? Đăng nhập
                  </Typography>
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default SignUp;
