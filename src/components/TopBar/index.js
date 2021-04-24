import React, { useState } from "react";
import { useStyles } from "./style";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { Divider, Drawer, useTheme } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import Logo from "../Logo";
import MyGridContainer from "./MyGridContainer";

// Start here
const TopBar = (ComponentItems, ComponentAuth) => {
  const classes = useStyles();
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const [open, setOpen] = useState(false);

  return function () {
    const handleDrawer = () => {
      setOpen(true);
    };

    return (
      <div className={classes.root}>
        <AppBar position="fixed" color="default">
          <Toolbar className={classes.toolBar}>
            <MyGridContainer justify="flex-start" spacing={2}>
              {/* Logo */}
              <Grid item xs={6} lg={1}>
                <Logo className={classes.logo} />
              </Grid>
              {isMatch ? (
                <Grid item container justify="flex-end" xs={6}>
                  <MenuIcon
                    className={classes.menuIcon}
                    color="primary"
                    fontSize="large"
                    onClick={handleDrawer}
                  />
                </Grid>
              ) : (
                // <Component />
                <>
                  <MyGridContainer className={classes.headData} item lg={8}>
                    <ComponentItems className={classes.headDataItems} />
                  </MyGridContainer>
                  <MyGridContainer
                    justify="flex-end"
                    className={classes.headAuth}
                    item
                    lg={3}
                  >
                    <ComponentAuth />
                  </MyGridContainer>
                </>
              )}
            </MyGridContainer>
          </Toolbar>
        </AppBar>

        <Drawer
          anchor="left"
          open={open}
          onClose={() => {
            setOpen(false);
          }}
        >
          <div className={classes.list}>
            <MyGridContainer className={classes.headAuth} item lg={3}>
              <ComponentAuth />
            </MyGridContainer>
            <Divider />
            <MyGridContainer className={classes.headData} item lg={8}>
              <ComponentItems className={classes.headDataItems} />
            </MyGridContainer>
          </div>
        </Drawer>
      </div>
    );
  };
};

export default TopBar;
