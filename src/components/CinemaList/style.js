import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    height: 90 * 8,
    maxHeight: 90 * 8,
    overflow: "hidden",
    marginBottom: theme.spacing(5),
  },
  tabs: {
    position: "relative",
    width: 90,
    border: `1px solid ${theme.palette.grey[300]}`,
    borderRadius: "4px",
  },
  cinemaLogoTab: {
    padding: 20,
    minWidth: "unset",

    "&:after": {
      content: "''",
      display: "block",
      position: "absolute",
      width: "80%",
      height: 1,
      bottom: 0,
      background: "rgba(238,238,238,.88)",
    },
  },
  cinemaLogoAvatar: {
    width: 50,
    height: 50,
  },
  cinemaTab: {
    position: "relative",
    height: 90,
    textAlign: "left",
    padding: "20px 15px 15px 20px",
    width: 280,

    "&:after": {
      content: "''",
      display: "block",
      position: "absolute",
      width: "80%",
      height: 1,
      bottom: 0,
      background: "rgba(238,238,238,.88)",
    },
  },
  cinemaByIdList: {
    width: 264,
    border: `1px solid ${theme.palette.grey[300]}`,
    borderLeft: "none",
  },
  cinemaTenCumRap: {
    display: "-webkit-box",
    WebkitLineClamp: "1",
    WebkitBoxOrient: "vertical",
    textOverflow: "ellipsis",
    overflow: "hidden",

    lineHeight: 1.4,
    color: theme.palette.secondary.light,
    fontWeight: theme.typography.fontWeightMedium,
  },
  cinemaDiaChi: {
    display: "-webkit-box",
    WebkitLineClamp: "1",
    WebkitBoxOrient: "vertical",
    textOverflow: "ellipsis",
    overflow: "hidden",

    color: theme.palette.grey[600],
    fontWeight: theme.typography.fontWeightRegular,
  },
  cinemaChiTiet: {
    textDecoration: "none",
    textTransform: "lowercase",
    fontSize: theme.typography.h6.fontSize,
    color: theme.palette.primary.main,
  },
  cinemaTabPanel: {
    flexGrow: 1,
    overflowY: "auto",
    width: "540px",
    border: `1px solid ${theme.palette.grey[300]}`,
    borderLeft: "none",
    borderRadius: "4px",
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
  ngayChieu: {
    color: theme.palette.secondary.light,
    fontSize: theme.typography.h4.fontSize,
    fontWeight: 500,
  },

  gioChieu: {
    color: theme.palette.primary.light,
  },
  phimInfo: {
    padding: "0 20px",
    width: "555px",
  },
  ngayGioChieuContainer: {
    display: "flex",
    flexWrap: "wrap",
  },
  ngayGioChieuBox: {
    textDecoration: "none",
    width: "45%",
    backgroundColor: "rgba(246, 246, 246, 0.5)",
    border: "1px solid #e4e4e4",

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
  ngayGioChieuInfo: {
    display: "flex",
    alignItems: "center",
  },
  tenPhim: {
    marginBottom: theme.spacing(1),
    lineHeight: "22px",
  },
  limitAge: {
    display: "inline-block",
    fontSize: "16px",
    background: theme.palette.primary.main,
    borderRadius: "4px",
    padding: "0 5px",
    color: theme.palette.common.white,
    minWidth: "33px",
    textAlign: "center",
    marginRight: theme.spacing(1),
  },
  anhPhim: {
    width: 100,
    height: 126,
  },
  movieSingle: {
    padding: 20,
    display: "flex",

    position: "relative",

    "&:after": {
      content: "''",
      display: "block",
      position: "absolute",
      width: "80%",
      height: 1,
      bottom: 0,
      background: "rgba(238,238,238,.88)",
    },
  },
}));
