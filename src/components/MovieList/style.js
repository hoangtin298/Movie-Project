import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: "50px",
    marginBottom: 30,
    [theme.breakpoints.down("sm")]: {
      padding: "20px",
    },
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
    width: "100%",
    height: "50px",
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
