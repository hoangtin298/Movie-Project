import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(3),
    marginBottom: 30,
  },
  carousel: {
    position: "relative",
    overflow: "visible",
  },
  movieGroup: {
    height: "896px",
    [theme.breakpoints.down("xs")]: {
      height: "auto",
    },
  },
  navButton: {
    fontSize: "50px",
    color: theme.palette.grey[500],
  },
  paper: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    marginLeft: "auto",
    width: "400px",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "unset",
      marginTop: theme.spacing(2),
      width: "100%",
      height: "40px",
    },
  },
  inputBase: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  title: {
    fontSize: "24px",
    color: theme.palette.primary.main,
  },
  movieHead: {
    marginBottom: theme.spacing(3),
  },
  alert: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: theme.spacing(4),
  },
}));
