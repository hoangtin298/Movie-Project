import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    padding: "0!important",
    height: "600px",
    border: `1px solid ${theme.palette.divider}`,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
    width: "90px",
    position: "relative",
  },
  tabLogo: {
    padding: 20,
    minWidth: "unset",

    "&:after": {
      content: "''",
      display: "block",
      position: "absolute",
      width: "80%",
      height: 1,
      bottom: 0,
      background: "rgba(238,238,238,0.88)",
    },
  },
  overFlowYCustom: {
    overflowY: "scroll",
    height: "600px",
    padding: "0 0 0 16px",
    "&::-webkit-scrollbar": {
      width: "7px",
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
  buttonContainer: {
    display: "flex",
    flexWrap: "wrap",
  },
  ngayGioChieuInfo: {
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
  },
  buttonTimeDate: {
    // width: "100%",
    // whiteSpace: "nowrap",
    textDecoration: "none",
    backgroundColor: "rgba(246, 246, 246, 0.5)",
    border: "1px solid #e4e4e4",
    "&:visited": {
      color: "inherit",
    },
    margin: theme.spacing(0, 2, 2, 0),
    padding: theme.spacing(1),
    borderRadius: 4,
    color: theme.palette.grey[500],
    cursor: "pointer",
    "&:hover $ngayChieu": {
      color: theme.palette.secondary.main,
      fontWeight: 600,
    },
    "&:hover $gioChieu": {
      color: theme.palette.primary.main,
      fontWeight: 600,
    },
  },
  ngayChieu: {
    color: theme.palette.secondary.light,
    fontSize: theme.typography.h4.fontSize,
    fontWeight: 500,
  },
  gioChieu: {
    color: theme.palette.primary.light,
  },
}));
