import React, { useEffect, useState } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { InputAdornment, InputLabel, Select } from "@material-ui/core";
import { useForm } from "react-hook-form";
import FormControl from "@material-ui/core/FormControl";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import Swal from "sweetalert2";
import { swalFailed, swalSuccess } from "../../../../utils";
import { actGetUserPagingApi } from "../modules/action";

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
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  formControl: {
    width: "100%",
  },
  button: {
    marginRight: "8px",
  },
}));

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function ManageDialog(props) {
  const {
    openDialog,
    setOpenDialog,
    handleCloseDialog,
    modal,
    search,
    page,
    numberElementOfPage,
  } = props;

  const [user, setUser] = useState({ ...props.modal.user });

  const classes = useStyles();
  const { register, handleSubmit, errors } = useForm({
    mode: "onBlur",
    resolver: yupResolver(schema),
  });
  const [showPassword, setShowPassword] = useState(false);

  const accessToken = useSelector(
    (state) => state.currentUserReducer.accessToken
  );

  const dispatch = useDispatch();

  useEffect(() => {
    setUser(props.modal.user);
  }, [props.modal.user]);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  const onAddSubmit = (data) => {
    data["maNhom"] = "GP09";
    axios({
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThemNguoiDung`,
      method: "POST",
      data,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((result) => {
        setOpenDialog(false);
        swalSuccess("Thêm thành công").then(() => {
          {
            search.trim() === ""
              ? dispatch(
                  actGetUserPagingApi(page.toString(), numberElementOfPage)
                )
              : dispatch(
                  actGetUserPagingApi(
                    page.toString(),
                    numberElementOfPage,
                    search
                  )
                );
          }
        });
      })
      .catch((error) => {
        setOpenDialog(false);
        swalFailed(error);
      });
  };

  const onUpdateSubmit = (data) => {
    data["maNhom"] = "GP09";
    axios({
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung`,
      method: "PUT",
      data,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((result) => {
        setOpenDialog(false);
        swalSuccess("Cập nhật thành công").then(() => {
          {
            search.trim() === ""
              ? dispatch(
                  actGetUserPagingApi(page.toString(), numberElementOfPage)
                )
              : dispatch(
                  actGetUserPagingApi(
                    page.toString(),
                    numberElementOfPage,
                    search
                  )
                );
          }
        });
      })
      .catch((error) => {
        setOpenDialog(false);
        swalFailed(error);
      });
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <Dialog maxWidth="sm" onClose={handleCloseDialog} open={openDialog}>
        <DialogTitle onClose={handleCloseDialog}>
          <Typography
            color={modal.id === "them" ? "primary" : "secondary"}
            variant="h3"
          >
            {modal.title}
          </Typography>
        </DialogTitle>
        <DialogContent dividers>
          <form className={classes.form} noValidate>
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
                  value={user.taiKhoan}
                  onChange={modal.id === "them" ? handleChange : null}
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
                  value={user.matKhau}
                  onChange={handleChange}
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
                  value={user.hoTen}
                  onChange={handleChange}
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
                  value={user.email}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
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
              <Grid item xs={12}>
                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel htmlFor="outlined-age-native-simple">
                    Mã Loại Người Dùng
                  </InputLabel>
                  <Select
                    native
                    value={user.maLoaiNguoiDung}
                    onChange={handleChange}
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
            </Grid>
          </form>
        </DialogContent>
        <DialogActions>
          <Button
            className={classes.button}
            variant="contained"
            onClick={
              modal.id === "them"
                ? handleSubmit(onAddSubmit)
                : handleSubmit(onUpdateSubmit)
            }
            autoFocus
            color={modal.id === "them" ? "primary" : "secondary"}
          >
            {modal.button}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
