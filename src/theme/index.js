import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  typography: {
    h1: { fontSize: "20px", fontWeight: "500" },
    h2: { fontSize: "18px", fontWeight: "500" },
    h3: { fontSize: "16px", fontWeight: "500" },
    h4: { fontSize: "14px", fontWeight: "500" },
    h5: { fontSize: "13px" },
    h6: { fontSize: "12px" },
  },
  palette: {
    primary: {
      main: "#fb4226",
      light: "#fa5238",
      lightGreen: "#86f348",
      bloodRed: "#b42a14",
      black: "#0a2029",
    },
    secondary: {
      main: "#00ac4d",
      light: "#108f3e",
    },
  },
});

export default theme;
