import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import EditIcon from "@material-ui/icons/Edit";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import { useDispatch, useSelector } from "react-redux";
import { actGetUserPagingApi } from "./modules/action";
import { Pagination } from "@material-ui/lab";
import {
  Button,
  CircularProgress,
  CssBaseline,
  Grid,
  InputBase,
  TableFooter,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import ManageDialog from "./ManageDialog";
import axios from "axios";
import { swalSuccess, swalFailed } from "../../../utils/index";
import LoadingPage from "../../../components/LoadingPage";
import { Redirect } from "react-router";

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
}));

const numberElementOfPage = "8";

export default function ManageUser() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const userPaging = useSelector((state) => state.userPagingReducer);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  const [openDialog, setOpenDialog] = useState(false);

  const [modal, setModal] = useState({
    title: "",
    button: "",
    id: "",
    user: {},
  });

  const accessToken = useSelector(
    (state) => state.currentUserReducer.accessToken
  );
  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleUpdate = (user) => {
    user["maNhom"] = "GP09";
    setModal({
      title: "Chỉnh Sửa Người Dùng",
      button: "Cập Nhật",
      id: "sua",
      user,
    });
    setOpenDialog(true);
  };

  const handleAdd = () => {
    setModal({
      title: "Thêm Người Dùng",
      button: "Thêm",
      id: "them",
      user: {
        taiKhoan: "",
        matKhau: "",
        email: "",
        soDt: "",
        hoTen: "",
        maNhom: "GP09",
        maLoaiNguoiDung: "KhachHang",
      },
    });
    setOpenDialog(true);
  };

  useEffect(() => {
    dispatch(actGetUserPagingApi(page.toString(), numberElementOfPage));
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

  //Pagination
  const handleChange = (event, value) => {
    event.preventDefault();
    setPage(value);
    {
      search === ""
        ? dispatch(actGetUserPagingApi(value.toString(), numberElementOfPage))
        : dispatch(
            actGetUserPagingApi(value.toString(), numberElementOfPage, search)
          );
    }
  };

  // search box
  const handleOnChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  // find user
  const handleOnClickSearch = () => {
    setPage(1);
    {
      search.trim() === ""
        ? dispatch(actGetUserPagingApi("1", numberElementOfPage))
        : dispatch(actGetUserPagingApi("1", numberElementOfPage, search));
    }
  };
  const handleOnKeyPress = (e) => {
    if (e.keyCode == 13) {
      e.preventDefault();
      setPage(1);
      {
        search.trim() === ""
          ? dispatch(actGetUserPagingApi("1", numberElementOfPage))
          : dispatch(actGetUserPagingApi("1", numberElementOfPage, search));
      }
    }
  };

  const deleteUser = (taiKhoan) => {
    axios({
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/XoaNguoiDung`,
      method: "DELETE",
      params: {
        taiKhoan,
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
        swalFailed(error);
      });
  };

  const renderUserPaging = () => {
    return userPaging.data.items.map((user) => {
      return (
        <TableRow key={user.taiKhoan}>
          <TableCell component="th" scope="row">
            {user.taiKhoan}
          </TableCell>
          <TableCell align="left">{user.hoTen}</TableCell>
          <TableCell align="left">{user.email}</TableCell>
          <TableCell align="left">{user.soDt}</TableCell>
          <TableCell align="left">
            {user.maLoaiNguoiDung === "KhachHang" ? "Khách Hàng" : "Quản Trị"}
          </TableCell>
          <TableCell align="center">
            <IconButton
              aria-label="edit"
              color="secondary"
              onClick={() => handleUpdate(user)}
            >
              <EditIcon />
            </IconButton>
            <IconButton
              aria-label="delete"
              color="primary"
              onClick={() => deleteUser(user.taiKhoan)}
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
      {userPaging.loading ? (
        <CircularProgress
          color="primary"
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
            <Grid container item xs={12} justify="flex-end">
              <Button
                className={classes.button}
                variant="contained"
                color="primary"
                onClick={handleAdd}
              >
                Thêm
              </Button>
            </Grid>
            <Grid className={classes.searchForm} container item xs={12}>
              <Paper elevation={1} component="form" className={classes.paper}>
                <InputBase
                  placeholder="Tìm kiếm người dùng"
                  className={classes.inputBase}
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
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="left">Tài khoản</TableCell>
                  <TableCell align="left">Họ tên</TableCell>
                  <TableCell align="left">Email</TableCell>
                  <TableCell align="left">Số điện thoại</TableCell>
                  <TableCell align="left">Loại người dùng</TableCell>
                  <TableCell align="center">Chức năng</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {userPaging.data ? renderUserPaging() : null}
              </TableBody>
            </Table>
          </TableContainer>
          {/* Pagination */}
          {userPaging.data ? (
            <div className={classes.rootPagination}>
              <Pagination
                color="primary"
                count={userPaging.data.totalPages - 1}
                page={page}
                onChange={handleChange}
              />
            </div>
          ) : null}
          {/* Dialog */}

          <ManageDialog
            search={search}
            page={page}
            numberElementOfPage={numberElementOfPage}
            openDialog={openDialog}
            setOpenDialog={setOpenDialog}
            handleCloseDialog={handleCloseDialog}
            modal={modal}
          />
        </>
      )}
    </div>
  );
}
