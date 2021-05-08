import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import theme from "./theme";
import { ThemeProvider } from "@material-ui/core/styles";
import { Provider } from "react-redux";
import { store } from "../src/store";

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>,

  document.getElementById("root")
);

reportWebVitals();
