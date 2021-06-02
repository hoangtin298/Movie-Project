import { Grid, makeStyles, TextField } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import moment from "moment";
import { useEffect, useState } from "react";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import axios from "axios";
import { swalFailed, swalSuccess, stringToSlug } from "../../../../utils";
import { actGetMoviePagingApi } from "../modules/action";

const schema = yup.object().shape({
  tenPhim: yup.string().required("Đây là trường bắt buộc"),
  trailer: yup.string().required("Đây là trường bắt buộc"),
  danhGia: yup
    .number()
    .required("Đây là trường bắt buộc")
    .typeError("Vui lòng nhập điểm đánh giá")
    .min(0, "Vui lòng nhập điểm đánh giá lớn hơn 0")
    .max(10, "Vui lòng nhập điểm đánh giá nhỏ hơn 10")
    .integer("Vui lòng nhập đúng điểm"),
  moTa: yup.string().required("Đây là trường bắt buộc"),
});

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
  },
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
  formContainer: {
    backgroundColor: theme.palette.common.white,
    borderRadius: "4px",
  },
  dateTimeContainer: {
    display: "flex",
    justifyContent: "space-around",
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

export default function ManageMovieDialog(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const {
    openDialog,
    setOpenDialog,
    handleCloseDialog,
    modal,
    search,
    page,
    numberElementOfPage,
    selectedDate,
    selectedFile,
    selectedImage,
    setSelectedDate,
    setSelectedFile,
    setSelectedImage,
  } = props;

  const [movie, setMovie] = useState({ ...props.movie });
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    setMovie(props.movie);
  }, [props.movie]);

  let flagTenPhim = false;

  const accessToken = JSON.parse(
    localStorage.getItem("currentUser")
  ).accessToken;

  const { register, handleSubmit, errors } = useForm({
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setMovie({
      ...movie,
      [name]: value,
    });
    if (name === "tenPhim") {
      flagTenPhim = true;
    }
  };

  const fileSelectedHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    setSelectedImage(URL.createObjectURL(event.target.files[0]));
    setMovie({
      ...movie,
      ["hinhAnh"]: event.target.files[0].name,
    });
  };

  const handleDateChange = (date) => {
    setMovie({
      ...movie,
      ["ngayKhoiChieu"]: moment(date).format("DD-MM-YYYY"),
    });
    setSelectedDate(date);
  };

  const onAddSubmit = (data) => {
    data["maNhom"] = "GP09";
    data["maPhim"] = "0";
    data["biDanh"] = stringToSlug(data["tenPhim"]);
    data["hinhAnh"] = movie.hinhAnh;
    data["ngayKhoiChieu"] = moment(selectedDate).format("DD-MM-YYYY");

    axios({
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/ThemPhim`,
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
                  actGetMoviePagingApi(page.toString(), numberElementOfPage)
                )
              : dispatch(
                  actGetMoviePagingApi(
                    page.toString(),
                    numberElementOfPage,
                    search
                  )
                );
          }
        });
        const frm = new FormData();
        frm.append("File", selectedFile, selectedFile.name);
        frm.append("tenPhim", movie.tenPhim);
        frm.append("maNhom", "GP09");
        axios({
          url: "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/UploadHinhAnhPhim",
          method: "POST",
          data: frm,
        })
          .then((result) => {
            console.log("Them hinh", result);
          })
          .catch((error) => {
            setOpenDialog(false);
            swalFailed(error).then(() => {
              {
                search.trim() === ""
                  ? dispatch(
                      actGetMoviePagingApi(page.toString(), numberElementOfPage)
                    )
                  : dispatch(
                      actGetMoviePagingApi(
                        page.toString(),
                        numberElementOfPage,
                        search
                      )
                    );
              }
            });
          });
      })
      .catch((error) => {
        setOpenDialog(false);
        swalFailed(error);
      });
  };

  const onUpdateSubmit = (data) => {
    data["maNhom"] = "GP09";
    data["maPhim"] = movie.maPhim;
    data["biDanh"] = stringToSlug(data["tenPhim"]);
    data["hinhAnh"] = movie.hinhAnh;
    data["ngayKhoiChieu"] = moment(selectedDate).format("DD-MM-YYYY");
    axios({
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/CapNhatPhim`,
      method: "POST",
      data: movie,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((result) => {
        console.log(result.data);
        setOpenDialog(false);
        swalSuccess("Cập nhật thành công").then(() => {
          {
            search.trim() === ""
              ? dispatch(
                  actGetMoviePagingApi(page.toString(), numberElementOfPage)
                )
              : dispatch(
                  actGetMoviePagingApi(
                    page.toString(),
                    numberElementOfPage,
                    search
                  )
                );
          }
        });
        if (selectedFile || flagTenPhim) {
          const frm = new FormData();
          frm.append("File", selectedFile, selectedFile.name);
          frm.append("tenPhim", movie.tenPhim);
          frm.append("maNhom", "GP09");
          axios({
            url: "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/UploadHinhAnhPhim",
            method: "POST",
            data: frm,
          })
            .then((result) => {
              console.log("Them hinh", result);
            })
            .catch((error) => {
              setOpenDialog(false);
              swalFailed(error).then(() => {
                {
                  search.trim() === ""
                    ? dispatch(
                        actGetMoviePagingApi(
                          page.toString(),
                          numberElementOfPage
                        )
                      )
                    : dispatch(
                        actGetMoviePagingApi(
                          page.toString(),
                          numberElementOfPage,
                          search
                        )
                      );
                }
              });
            });
        }
      })
      .catch((error) => {
        setOpenDialog(false);
        swalFailed(error);
        console.log(error);
      });
  };

  return (
    <div>
      <Dialog maxWidth="sm" onClose={handleCloseDialog} open={openDialog}>
        <DialogTitle onClose={handleCloseDialog}>
          <Typography
            component="p"
            variant="h3"
            color={modal.id === "them" ? "primary" : "secondary"}
          >
            {modal.title}
          </Typography>
        </DialogTitle>
        <DialogContent dividers>
          <form className={classes.form} noValidate>
            <Grid className={classes.formContainer} container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="tenPhim"
                  label="Tên phim"
                  name="tenPhim"
                  autoComplete="tenPhim"
                  inputRef={register}
                  error={!!errors.tenPhim}
                  helperText={errors?.tenPhim?.message}
                  onChange={handleChange}
                  value={movie.tenPhim}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="trailer"
                  label="Trailer"
                  name="trailer"
                  autoComplete="trailer"
                  inputRef={register}
                  error={!!errors.trailer}
                  helperText={errors?.trailer?.message}
                  onChange={handleChange}
                  value={movie.trailer}
                />
              </Grid>
              <Grid item xs={12}>
                <Typography>Hinh Anh</Typography>
                <img
                  alt="upload image"
                  style={{
                    display: "block",
                    height: 100,
                    width: 100,
                  }}
                  src={selectedImage}
                />
                <input
                  accept="image/*"
                  style={{
                    display: "none",
                  }}
                  id="contained-button-file"
                  multiple
                  type="file"
                  onChange={fileSelectedHandler}
                />
                <label htmlFor="contained-button-file">
                  <Button variant="contained" color="primary" component="span">
                    Chọn ảnh
                  </Button>
                </label>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="moTa"
                  label="Mô tả"
                  name="moTa"
                  autoComplete="moTa"
                  inputRef={register}
                  error={!!errors.moTa}
                  helperText={errors?.moTa?.message}
                  onChange={handleChange}
                  value={movie.moTa}
                />
              </Grid>

              <Grid item xs={12} className={classes.dateTimeContainer}>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <KeyboardDatePicker
                    format="MM/dd/yyyy"
                    margin="normal"
                    id="date-picker-inline"
                    label="Date picker inline"
                    name="ngayKhoiChieu"
                    inputRef={register}
                    error={!!errors.ngayKhoiChieu}
                    helperText={errors?.ngayKhoiChieu?.message}
                    value={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                      "aria-label": "change date",
                    }}
                  />
                </MuiPickersUtilsProvider>
              </Grid>

              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="danhGia"
                  label="Đánh giá"
                  name="danhGia"
                  autoComplete="danhGia"
                  inputRef={register}
                  error={!!errors.danhGia}
                  helperText={errors?.danhGia?.message}
                  onChange={handleChange}
                  value={movie.danhGia}
                />
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
