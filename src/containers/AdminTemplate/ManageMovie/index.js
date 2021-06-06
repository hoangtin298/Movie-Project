import {
  Grid,
  Button,
  Paper,
  InputBase,
  IconButton,
  makeStyles,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  CssBaseline,
  TableBody,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import { useDispatch, useSelector } from "react-redux";
import { actGetMoviePagingApi } from "./modules/action";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import moment from "moment";
import { Pagination } from "@material-ui/lab";
import axios from "axios";
import { swalSuccess, swalFailed } from "../../../utils/index";
import ManageMovieDialog from "./ManageMovieDialog";
import LoadingPage from "../../../components/LoadingPage";
import { Redirect } from "react-router";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
  },
  rootAlert: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
  rootPagination: {
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
    display: "flex",
    justifyContent: "flex-end",
    padding: theme.spacing(3),
  },
  table: {
    minWidth: 650,
  },
  paper: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: "500px",
  },
  inputBase: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  searchForm: {
    display: "flex",
    padding: theme.spacing(2),
    paddingBottom: theme.spacing(3),
    backgroundColor: theme.palette.common.white,
    marginTop: theme.spacing(3),
  },
  userForm: {
    marginTop: theme.spacing(3),
  },
  button: {
    margin: theme.spacing(0, 1),
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "flex-end",
  },
}));

export default function ManageMovie() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const moviePaging = useSelector((state) => state.moviePagingReducer);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [openDialog, setOpenDialog] = useState(false);
  const numberElementOfPage = "8";
  const [modal, setModal] = useState({
    title: "",
    button: "",
    id: "",
  });
  const [movie, setMovie] = useState({});
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedImage, setSelectedImage] = useState(
    "https://tix.vn/app/assets/img/default-film.webp"
  );
  const [selectedFile, setSelectedFile] = useState(null);

  const accessToken = JSON.parse(
    localStorage.getItem("currentUser")
  ).accessToken;

  useEffect(() => {
    dispatch(actGetMoviePagingApi(page.toString(), numberElementOfPage));
  }, []);
  if (!localStorage.getItem("currentUser")) {
    return <Redirect to="/" />;
  }

  if (
    JSON.parse(localStorage.getItem("currentUser")).maLoaiNguoiDung !==
    "QuanTri"
  ) {
    return <Redirect to="/" />;
  }
  const handleUpdate = (movie) => {
    setModal({
      title: "Chỉnh Sửa Phim",
      button: "Cập Nhật",
      id: "sua",
    });
    setMovie(movie);
    setSelectedFile(null);
    setSelectedDate(movie.ngayKhoiChieu);
    setSelectedImage(movie.hinhAnh);
    setOpenDialog(true);
  };

  const handleAdd = () => {
    setModal({
      title: "Thêm Phim Mới",
      button: "Thêm",
      id: "them",
    });
    setMovie({
      maPhim: "",
      tenPhim: "",
      biDanh: "",
      trailer: "",
      hinhAnh: "https://tix.vn/app/assets/img/default-film.webp",
      moTa: "",
      maNhom: "GP09",
      ngayKhoiChieu: moment().format("DD-MM-YYYY"),
      danhGia: "",
    });
    setSelectedFile(null);
    setSelectedDate(new Date());
    setSelectedImage("https://tix.vn/app/assets/img/default-film.webp");
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleChangePagination = (event, value) => {
    event.preventDefault();
    setPage(value);
    {
      search === ""
        ? dispatch(actGetMoviePagingApi(value.toString(), numberElementOfPage))
        : dispatch(
            actGetMoviePagingApi(value.toString(), numberElementOfPage, search)
          );
    }
  };

  const handleOnChangeSearch = (event) => {
    setSearch(event.target.value);
  };

  const handleOnClickSearch = () => {
    setPage(1);
    {
      search.trim === ""
        ? dispatch(actGetMoviePagingApi("1", numberElementOfPage))
        : dispatch(actGetMoviePagingApi("1", numberElementOfPage, search));
    }
  };

  const handleOnKeyPress = (e) => {
    if (e.keyCode == 13) {
      e.preventDefault();
      setPage(1);
      {
        search.trim === ""
          ? dispatch(actGetMoviePagingApi("1", numberElementOfPage))
          : dispatch(actGetMoviePagingApi("1", numberElementOfPage, search));
      }
    }
  };

  const deleteMovie = (MaPhim) => {
    axios({
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/XoaPhim`,
      method: "DELETE",
      params: {
        MaPhim,
      },
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((result) => {
        swalSuccess(result.data).then(() => {
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
      })
      .catch((error) => {
        swalFailed(error);
      });
  };

  const renderMoviePaging = () => {
    return moviePaging.data.items.map((movie) => {
      return (
        <TableRow key={movie.maPhim}>
          <TableCell component="th" scope="row">
            {movie.tenPhim}
          </TableCell>
          <TableCell align="left">{movie.moTa}</TableCell>
          <TableCell align="left">
            {moment(movie.ngayKhoiChieu).format("DD-MM-YYYY")}
          </TableCell>
          <TableCell align="left">{movie.danhGia}</TableCell>
          <TableCell align="left">
            <img
              alt="movie"
              src={movie.hinhAnh}
              style={{ height: 50, width: 50 }}
            />
          </TableCell>
          <TableCell align="center">
            <IconButton
              aria-label="edit"
              color="secondary"
              onClick={() => handleUpdate(movie)}
            >
              <EditIcon />
            </IconButton>
            <IconButton
              aria-label="delete"
              color="primary"
              onClick={() => deleteMovie(movie.maPhim.toString())}
            >
              <DeleteIcon />
            </IconButton>
          </TableCell>
        </TableRow>
      );
    });
  };

  return (
    <div className={classes.root}>
      {moviePaging.loading ? (
        <CircularProgress
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
          }}
        />
      ) : (
        <>
          <CssBaseline />
          <Grid container>
            <Grid item xs={12} className={classes.buttonContainer}>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                onClick={handleAdd}
              >
                Thêm
              </Button>
            </Grid>
            <Grid className={classes.searchForm} item xs={12}>
              <Paper className={classes.paper} elevation={1} component="form">
                <InputBase
                  className={classes.inputBase}
                  placeholder="Tìm kiếm phim"
                  onChange={handleOnChangeSearch}
                  onKeyDown={handleOnKeyPress}
                />
                <IconButton onClick={handleOnClickSearch}>
                  <SearchIcon color="primary" />
                </IconButton>
              </Paper>
            </Grid>
          </Grid>

          <TableContainer className={classes.userForm} component={Paper}>
            <Table className={classes.table}>
              <TableHead>
                <TableRow>
                  <TableCell align="left">Tên phim</TableCell>
                  <TableCell align="left">Mô tả</TableCell>
                  <TableCell align="left">Ngày chiếu</TableCell>
                  <TableCell align="left">Đánh giá</TableCell>
                  <TableCell align="left">Hình ảnh</TableCell>
                  <TableCell align="left">Chức năng</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>{moviePaging.data && renderMoviePaging()}</TableBody>
            </Table>
          </TableContainer>
          {/* Pagination */}
          {moviePaging.data && (
            <div className={classes.rootPagination}>
              <Pagination
                color="primary"
                count={moviePaging.data.totalPages}
                page={page}
                onChange={handleChangePagination}
              />
            </div>
          )}
          {/* Dialog */}
          <ManageMovieDialog
            search={search}
            page={page}
            numberElementOfPage={numberElementOfPage}
            openDialog={openDialog}
            setOpenDialog={setOpenDialog}
            handleCloseDialog={handleCloseDialog}
            modal={modal}
            movie={movie}
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
            selectedImage={selectedImage}
            setSelectedImage={setSelectedImage}
            selectedFile={selectedFile}
            setSelectedFile={setSelectedFile}
          />
        </>
      )}
    </div>
  );
}
