import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.grey[900],
    color: "#f5f7ea",
    width: "100%",
    paddingBottom: theme.spacing(3),
  },
  footerTypograhyLabel: {
    fontSize: theme.typography.h6.fontSize,
    color: theme.palette.common.white,
    padding: "20px 0 10px 0",
  },
  footerLink: {
    paddingBottom: "7px",
    fontSize: theme.typography.h6.fontSize,
    whitespace: "nowrap",
    color: theme.palette.grey[500],
    textDecoration: "none!important",
    transition: "0.4s",
    "&:hover": {
      color: "#fff",
    },
  },
  footerPartner: {
    width: "30px",
    height: "30px",
    borderRadius: "50%",
  },
  footerSpacing: {
    marginBottom: theme.spacing(2),
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
      marginBottom: theme.spacing(0),
    },
  },
  footerSpacingTop: {
    marginTop: theme.spacing(3),
  },
  footerPartnerHover: {
    "&:hover": {
      filter: "grayscale(80%)",
    },
  },
  divider: {
    backgroundColor: theme.palette.grey[300],
  },
  spacingWhenmd: {
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(3, 0),
    },
    [theme.breakpoints.down("xs")]: {
      padding: theme.spacing(2, 0, 0, 0),
    },
  },
  alignTextMdD: {
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
  },
  paddingthem: {
    margin: theme.spacing(0, 2, 0, 0),
  },
}));
