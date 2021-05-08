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
import { useState } from "react";

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

  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (data) => {
    dispatch(actSignInApi(data, history));
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Container component="main" maxWidth="xs">
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
            // autoFocus
            inputRef={register}
            error={!!errors.taiKhoan}
            helperText={errors?.taiKhoan?.message}
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
              <Checkbox
                name="remember"
                color="primary"
                // inputRef={register}
                defaultValue={false}
              />
            }
            label="Nhớ tài khoản"
          />

          {/* In ra loi neu dang nhap that bai */}
          {signInReducer.error ? (
            <Alert severity="error">{signInReducer.error.response.data}</Alert>
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
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Quên mật khẩu ?
              </Link>
            </Grid>
            <Grid item>
              <Link to="/sign-up" variant="body2">
                {"Bạn chưa có tài khoản? Đăng ký"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

export default SignIn;
