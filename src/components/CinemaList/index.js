import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actGetCinemaByIdApi, actGetCinemaListApi } from "./modules/action";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Avatar from "@material-ui/core/Avatar";
import { withStyles } from "@material-ui/core/styles";
import { Link, useHistory } from "react-router-dom";

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

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    height: 630,
    maxHeight: 630,
    overflow: "hidden",
  },
  tabs: {
    position: "relative",
    borderRight: `1px solid ${theme.palette.divider}`,

    border: "1px solid #ebebec",
  },
  cinemaLogoTab: {
    padding: 20,
    minWidth: "unset",

    "&:after": {
      content: "''",
      display: "block",
      position: "absolute",
      width: "80%",
      height: 1,
      bottom: 0,
      background: "rgba(238,238,238,.88)",
    },
  },
  cinemaLogoAvatar: {
    width: 50,
    height: 50,
  },
  cinemaTab: {
    position: "relative",
    height: 90,
    textAlign: "left",
    padding: "20px 15px 15px 20px",
    width: 280,

    "&:after": {
      content: "''",
      display: "block",
      position: "absolute",
      width: "80%",
      height: 1,
      bottom: 0,
      background: "rgba(238,238,238,.88)",
    },
  },
  cinemaByIdList: {
    border: "1px solid #ebebec",
    borderLeft: "none",
  },
  cinemaTenCumRap: {
    display: "-webkit-box",
    WebkitLineClamp: "1",
    WebkitBoxOrient: "vertical",
    textOverflow: "ellipsis",
    overflow: "hidden",

    lineHeight: 1.4,
    color: theme.palette.secondary.light,
    fontWeight: theme.typography.fontWeightMedium,
  },
  cinemaDiaChi: {
    display: "-webkit-box",
    WebkitLineClamp: "1",
    WebkitBoxOrient: "vertical",
    textOverflow: "ellipsis",
    overflow: "hidden",

    color: theme.palette.grey[600],
    fontWeight: theme.typography.fontWeightRegular,
  },
  cinemaChiTiet: {
    textDecoration: "none",
    textTransform: "lowercase",
    fontSize: theme.typography.h6.fontSize,
    color: theme.palette.primary.main,
  },
}));

function CinemaList() {
  const dispatch = useDispatch();
  const history = useHistory();
  const cinemaList = useSelector((state) => state.cinemaListReducer);
  const cinemaById = useSelector((state) => state.cinemaByIdReducer);

  useEffect(() => {
    dispatch(actGetCinemaListApi());
    dispatch(actGetCinemaByIdApi("BHDStar"));
  }, []);

  if (cinemaById.data) {
    console.log(cinemaById.data[0].lstCumRap);
  }

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
        <div>
          <img
            alt={item.tenPhim}
            src={item.hinhAnh}
            style={{ width: 50, height: 50 }}
            key={item.maPhim}
          />
          <Typography>{item.tenPhim}</Typography>
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
        style={{
          flexGrow: 1,
        }}
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
