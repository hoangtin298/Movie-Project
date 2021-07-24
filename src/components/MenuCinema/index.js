import React, { useState } from "react";
import { useStyles } from "./style";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Avatar from "@material-ui/core/Avatar";
import { Divider, Grid, useMediaQuery } from "@material-ui/core";
import moment from "moment";
import { Link } from "react-router-dom";
import { useTheme } from "@material-ui/core/styles";
function MenuCinema(props) {
  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
        {...other}
      >
        {value === index && <Box p={2}>{children}</Box>}
      </div>
    );
  }
  let { data } = props;
  const [value, setValue] = React.useState(0);
  const classes = useStyles();
  const theme = useTheme();
  const isMatchSm = useMediaQuery(theme.breakpoints.down("sm"));
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const renderCinemaLogo = (arrData) => {
    return arrData.map((item, index) => {
      return (
        <Tab
          key={index}
          icon={
            <Avatar
              alt={item.tenHeThongRap}
              src={item.logo}
              className={classes.avartar}
            />
          }
          className={classes.tabLogo}
        />
      );
    });
  };
  const renderLichChieu = (arrData) => {
    return arrData.cumRapChieu.map((item, index) => {
      return (
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h3" style={{ color: "#8bc34a" }}>
              {item.tenCumRap}
            </Typography>
          </Grid>
          {item.lichChieuPhim.slice(0, 10).map((lichchieu, index) => {
            return (
              <Grid item xs={6} sm={6} md={3}>
                <div className={classes.buttonTimeDate}>
                  <Link
                    to={`/purchase/${lichchieu.maLichChieu}`}
                    className={classes.ngayGioChieuInfo}
                  >
                    {isMatchSm ? (
                      <Typography className={classes.ngayChieu}>
                        {moment(lichchieu.ngayChieuGioChieu).format("DD-MM")}
                      </Typography>
                    ) : (
                      <Typography className={classes.ngayChieu}>
                        {moment(lichchieu.ngayChieuGioChieu).format(
                          "DD-MM-YYYY"
                        )}
                      </Typography>
                    )}

                    <Typography style={{ color: "grey" }}>
                      &nbsp;~&nbsp;
                    </Typography>
                    <Typography className={classes.gioChieu}>
                      {moment(lichchieu.ngayChieuGioChieu).format("HH:mm")}
                    </Typography>
                  </Link>
                </div>
              </Grid>
            );
          })}
        </Grid>
      );
    });
  };
  return (
    <Container className={classes.root}>
      <Tabs
        orientation="vertical"
        value={value}
        onChange={handleChange}
        className={classes.tabs}
      >
        {data ? renderCinemaLogo(data) : null}
      </Tabs>

      <TabPanel value={value} index={value} className={classes.overFlowYCustom}>
        {/* {data ? setMauSac(data[value].maHeThongRap) : null} */}
        {data ? renderLichChieu(data[value]) : null}
      </TabPanel>

      {/* {data ? renderLichChieu(data) : null} */}
    </Container>
  );
}
export default MenuCinema;
