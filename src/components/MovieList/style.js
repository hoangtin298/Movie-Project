import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(8),
  },
  carousel: {
    position: "relative",
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
}));
