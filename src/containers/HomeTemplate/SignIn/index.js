import {
  Avatar,
  Button,
  Checkbox,
  Container,
  CssBaseline,
  FormControlLabel,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@material-ui/core";
import { useForm } from "react-hook-form";
import { useStyles } from "./style";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { actSignInApi } from "./modules/action";
import { Link, useHistory } from "react-router-dom";
import Alert from "@material-ui/lab/Alert";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { useEffect, useState } from "react";

const schema = yup.object().shape({
  taiKhoan: yup.string().required("Đây là trường bắt buộc !"),
  matKhau: yup
    .string()
    .required("Đây là trường bắt buộc !")
    .min(6, "Mật khẩu phải có ít nhất 6 kí tự !"),
});

const SignIn = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const signInReducer = useSelector((state) => state.signInReducer);
  const { register, handleSubmit, errors } = useForm({
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  const [remember, setRemember] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [user, setUser] = useState({
    taiKhoan: "",
    matKhau: "",
  });

  useEffect(() => {
    if (localStorage.getItem("rememberUser")) {
      setUser(JSON.parse(localStorage.getItem("rememberUser")));
      setRemember(true);
    }
  }, []);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  const onSubmit = (data) => {
    if (remember) {
      localStorage.setItem("rememberUser", JSON.stringify(data));
    } else {
      localStorage.removeItem("rememberUser");
    }
    dispatch(actSignInApi(data, history));
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
          <Avatar className={classes.avatar}></Avatar>
          <Typography component="h1" variant="h1">
            Đăng nhập
          </Typography>
          <form
            className={classes.form}
            noValidate
            onSubmit={handleSubmit(onSubmit)}
          >
            <TextField
              variant="outlined"
              margin="normal"
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
              onChange={handleChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
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
              value={user.matKhau}
              onChange={handleChange}
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
            <FormControlLabel
              control={
                <Checkbox name="remember" color="primary" checked={remember} />
              }
              label="Nhớ tài khoản"
              onChange={() => setRemember(!remember)}
            />

            {/* In ra loi neu dang nhap that bai */}
            {signInReducer.error ? (
              <Alert severity="error">
                {signInReducer.error.response.data}
              </Alert>
            ) : null}

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Đăng nhập
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link to="/sign-up">
                  <Typography variant="h3">
                    {"Bạn chưa có tài khoản? Đăng ký"}
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

export default SignIn;
