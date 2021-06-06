import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actGetCinemaByIdApi, actGetCinemaListApi } from "./modules/action";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Avatar from "@material-ui/core/Avatar";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import moment from "moment";
import { useStyles } from "./style";

const StyledTab = withStyles({
  wrapper: {
    display: "unset",
  },
})(Tab);

function TabPanel(props) {
  const { children, valueLogo, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={valueLogo !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {valueLogo === index && (
        <Box p={3} style={{ padding: 0 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

function TabPanelCinema(props) {
  const { children, valueCinema, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={valueCinema !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {valueCinema === index && <Box>{children}</Box>}
    </div>
  );
}

function CinemaList() {
  const dispatch = useDispatch();
  const cinemaList = useSelector((state) => state.cinemaListReducer);
  const cinemaById = useSelector((state) => state.cinemaByIdReducer);

  useEffect(() => {
    dispatch(actGetCinemaListApi());
    dispatch(actGetCinemaByIdApi("BHDStar"));
  }, []);

  const classes = useStyles();
  const [valueLogo, setValueLogo] = useState(0);
  const [valueCinema, setValueCinema] = useState(0);

  const handleChangeLogo = (event, newValue) => {
    setValueLogo(newValue);
    setValueCinema(0);
  };

  const handleChangeCinema = (event, newValue) => {
    setValueCinema(newValue);
  };

  const renderCinemaLogo = (arrData) => {
    return arrData.map((item, index) => {
      return (
        <Tab
          className={classes.cinemaLogoTab}
          key={item.maHeThongRap}
          icon={
            <Avatar
              alt={item.biDanh}
              src={item.logo}
              className={classes.cinemaLogoAvatar}
            />
          }
          onClick={() => dispatch(actGetCinemaByIdApi(item.maHeThongRap))}
        />
      );
    });
  };

  const renderCinemaByIdList = (arrCinemaList) => {
    return arrCinemaList.map((item, index) => {
      return (
        <TabPanel
          className={classes.cinemaByIdList}
          valueLogo={valueLogo}
          index={index}
          key={item.maHeThongRap}
        >
          <Tabs
            orientation="vertical"
            value={valueCinema}
            onChange={handleChangeCinema}
          >
            {cinemaById.data
              ? renderCinemaById(cinemaById.data[0].lstCumRap)
              : null}
          </Tabs>
        </TabPanel>
      );
    });
  };
  const renderCinemaById = (arrData) => {
    return arrData.map((item, index) => {
      return (
        <StyledTab
          key={item.maCumRap}
          label={
            <div>
              <Typography className={classes.cinemaTenCumRap} variant="h4">
                {item.tenCumRap}
              </Typography>
              <Typography className={classes.cinemaDiaChi} variant="h6">
                {item.diaChi}
              </Typography>
              <Link to="/" className={classes.cinemaChiTiet}>
                [chi tiết]
              </Link>
            </div>
          }
          className={classes.cinemaTab}
        />
      );
    });
  };

  const renderMovieByCinema = (arrMovie) => {
    return arrMovie.map((item, index) => {
      return (
        <div key={item.maPhim} className={classes.movieSingle}>
          <img
            alt={item.tenPhim}
            src={item.hinhAnh}
            className={classes.anhPhim}
          />
          <div className={classes.phimInfo}>
            <Typography variant="h2" className={classes.tenPhim}>
              <span className={classes.limitAge}>C18</span>
              {item.tenPhim}
            </Typography>

            <div className={classes.ngayGioChieuContainer}>
              {item.lstLichChieuTheoPhim
                .slice(0, 4)
                .map((childItem, childIndex) => {
                  return (
                    <Link
                      key={childItem.maLichChieu}
                      className={classes.ngayGioChieuBox}
                      to={`/purchase/${childItem.maLichChieu}`}
                    >
                      <div className={classes.ngayGioChieuInfo}>
                        <Typography className={classes.ngayChieu}>
                          {moment(childItem.ngayChieuGioChieu).format(
                            "DD-MM-YYYY"
                          )}
                        </Typography>
                        <Typography>&nbsp;~&nbsp;</Typography>
                        <Typography variant="h3" className={classes.gioChieu}>
                          {moment(childItem.ngayChieuGioChieu).format("HH:mm")}
                        </Typography>
                      </div>
                    </Link>
                  );
                })}
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <Container maxWidth="md" className={classes.root}>
      <Tabs
        orientation="vertical"
        value={valueLogo}
        onChange={handleChangeLogo}
        className={classes.tabs}
      >
        {cinemaList.data ? renderCinemaLogo(cinemaList.data) : null}
      </Tabs>
      {cinemaList.data && renderCinemaByIdList(cinemaList.data)}

      <TabPanelCinema
        valueCinema={valueCinema}
        index={valueCinema}
        className={classes.cinemaTabPanel}
      >
        {cinemaById.data &&
          renderMovieByCinema(
            cinemaById.data[0].lstCumRap[valueCinema].danhSachPhim
          )}
      </TabPanelCinema>
    </Container>
  );
}

export default CinemaList;
