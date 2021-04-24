import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  typography: {
    h1: { fontSize: "20px" },
    h2: { fontSize: "18px" },
    h3: { fontSize: "16px", fontWeight: "500" },
    h4: { fontSize: "14px" },
    h5: { fontSize: "13px" },
    h6: { fontSize: "12px" },
  },
  palette: {
    primary: {
      main: "#d02028",
    },
  },
});

export default theme;
