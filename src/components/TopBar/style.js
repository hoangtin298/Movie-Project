import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  offset: theme.mixins.toolbar,
  appBar: {},
  toolBar: {
    backgroundColor: "rgba(255,255,255,.95)",
  },
  logo: {
    height: "50px",
    width: "50px",
    cursor: "pointer",
  },
  menuIcon: {
    cursor: "pointer",
    "&:active": {
      color: theme.palette.common.white,
      backgroundColor: theme.palette.primary.main,
    },
  },
  list: {
    width: "210px",
  },

  // Top Bar of Home Template
  headData: {
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(2, 0),
    },
  },
  headDataItems: {
    textDecoration: "none",
    color: theme.palette.common.black,
    padding: theme.spacing(0, 2),
    cursor: "pointer",
    transition: "all .3s",

    "&:hover": {
      color: theme.palette.primary.main,
    },
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(2, 4),
      width: "100%",
      textAlign: "left",
    },
  },
  headAuth: {
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(2, 0),
    },
  },
  headAuthItems: {
    color: theme.palette.grey[500],
    cursor: "pointer",
    textDecoration: "none",
    display: "flex",

    alignItems: "center",
    padding: theme.spacing(0, 1),
    "&:hover": {
      color: theme.palette.primary.main,
    },
    [theme.breakpoints.down("md")]: {
      justifyContent: "flex-start",
      width: "100%",
      padding: theme.spacing(1, 2),
    },
  },
  authIcon: {
    margin: theme.spacing(0, 1),
    width: theme.spacing(4),
    height: theme.spacing(4),
  },
  //
  overflowEllipis: {
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden",
    maxWidth: "200px",
  },
}));
