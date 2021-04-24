import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  toolBar: {
    backgroundColor: theme.palette.common.white,
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
    width: "250px",
  },

  // Top Bar of Home Template
  headData: {
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(2, 0),
    },
  },
  headDataItems: {
    padding: theme.spacing(0, 4),
    cursor: "pointer",
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
  },
  //
  overflowEllipis: {
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden",
    width: "90px",
  },
}));
