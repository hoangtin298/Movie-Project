import React from "react";
import { Link as RouterLink } from "react-router-dom";
import GroupIcon from "@material-ui/icons/Group";
import {
  Avatar,
  Box,
  Button,
  Divider,
  Drawer,
  Hidden,
  List,
  Typography,
  makeStyles,
} from "@material-ui/core";

import PersonAddIcon from "@material-ui/icons/PersonAdd";
import BarChartIcon from "@material-ui/icons/BarChart";
import NavItem from "./NavItem";
import { useSelector } from "react-redux";

const items = [
  {
    href: "/dashboard",
    icon: BarChartIcon,
    title: "Dashboard",
  },
  {
    href: "/manage-user",
    icon: GroupIcon,
    title: "Manage User",
  },
];

const useStyles = makeStyles(() => ({
  mobileDrawer: {
    width: 256,
  },
  desktopDrawer: {
    width: 256,
    top: 64,
    height: "calc(100% - 64px)",
  },
  avatar: {
    cursor: "pointer",
    width: 64,
    height: 64,
  },
}));

const NavBarAdmin = ({ openDrawer, setOpenDrawer }) => {
  const classes = useStyles();

  const user = useSelector((state) => state.currentUserReducer);

  const content = (
    <Box height="100%" display="flex" flexDirection="column">
      <Box alignItems="center" display="flex" flexDirection="column" p={2}>
        <Avatar className={classes.avatar} component={RouterLink} />
        <Typography className={classes.name} color="textPrimary" variant="h5">
          {user.taiKhoan}
        </Typography>
        <Typography color="textSecondary" variant="body2">
          {user.hoTen}
        </Typography>
      </Box>
      <Divider />
      <Box p={2}>
        <List>
          {items.map((item) => (
            <NavItem
              href={item.href}
              key={item.title}
              title={item.title}
              icon={item.icon}
            />
          ))}
        </List>
      </Box>
      <Box flexGrow={1} />s
    </Box>
  );

  return (
    <>
      <Hidden lgUp>
        <Drawer
          anchor="left"
          classes={{ paper: classes.mobileDrawer }}
          variant="temporary"
          open={openDrawer}
          onClose={() => {
            setOpenDrawer(false);
          }}
        >
          {content}
        </Drawer>
      </Hidden>
      <Hidden mdDown>
        <Drawer
          anchor="left"
          classes={{ paper: classes.desktopDrawer }}
          open
          variant="persistent"
        >
          {content}
        </Drawer>
      </Hidden>
    </>
  );
};

export default NavBarAdmin;
