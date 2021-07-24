import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  datveBox: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
    boxShadow: " 0 0 5px grey",
  },
  sectionSpacing: {
    padding: theme.spacing(3, 2),
  },
  flexInfo: {
    display: "flex",
    justifyContent: "space-between",
  },
  buttonPurchase: {
    marginTop: theme.spacing(3),
    backgroundColor: theme.palette.primary.main,
    width: "100%",
    color: theme.palette.background.paper,
    fontSize: "25px",
    borderRadius: "unset",
    "&:hover": {
      backgroundColor: theme.palette.primary.bloodRed,
    },
  },
  spanInfo: {
    color: theme.palette.secondary.light,
    textAlign: "right",
  },

  chairContainer: {
    margin: "auto",
    width: "90%",
  },
  chairArea: {
    width: "79.9%",
    whiteSpace: "nowrap",
    margin: "0 auto",
    overflowX: "auto",
    "&::-webkit-scrollbar": {
      width: "4px",
      height: "4px!important",
    },
    "&::-webkit-scrollbar-track": {
      boxShadow: "inset 0 0 5px grey",
      borderRadius: "10px",
    },
    "&::-webkit-scrollbar-thumb": {
      boxShadow: "inset 0 0 5px #616161",
      background: theme.palette.common.white,
      borderRadius: "10px",
    },
  },

  chair: {
    width: "35px!important",
    height: "35px!important",
    border: "none!important",
    borderRadius: "5px",
    minWidth: "unset",
    margin: "5px",
    cursor: "pointer",
    backgroundColor: "rgb(233, 233,233)",
    [theme.breakpoints.down("sm")]: {
      width: "30px!important",
      height: "30px!important",
      fontSize: theme.typography.h4.fontSize,
    },
  },
  bookedChair: {
    cursor: "no-drop!important",
    backgroundColor: "rgb(118, 118,118)!important",
  },
  demoChairContainer: {
    margin: "20px auto",
    width: "50%",
    display: "flex",
    justifyContent: "center",
  },
  demoChairGroup: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    alignItems: "center",
    margin: theme.spacing(0, 2),
  },
  demoChair: {
    cursor: "no-drop!important",
  },
  demoChairType: {},
  vipChair: {
    backgroundColor: "orange",
  },
  rowChairContainer: {
    width: "35px!important",
    height: "35px!important",
    paddingTop: "15px",
    color: "red",
    position: "relative",
    display: "inline-block",
  },
  rowChairName: {
    position: "absolute",
    width: "100%",
    height: "100%",
    fontSize: "30px",
  },
  textElipsis: {
    width: "300px",
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
  },
  fontResponsive: {
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.typography.h6.fontSize,
    },
  },
  fontResponsiveReceipt: {
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.typography.h5.fontSize,
    },
  },
}));
