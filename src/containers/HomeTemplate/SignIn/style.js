import { makeStyles } from "@material-ui/core";
import backgroundImg from "../../../assets/backapp.jpg";

export const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(4),
    background: `url(${backgroundImg})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    minHeight: "100vh",
  },
  paper: {
    margin: theme.spacing(4, 0),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(2, 0),
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  formContainer: {
    backgroundColor: theme.palette.common.white,
    borderRadius: "4px",
  },
}));
