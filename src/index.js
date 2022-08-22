import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import "./langConfig";

// Import Router
import { BrowserRouter } from "react-router-dom";

// Theme Wrapper
import ThemeWrapper from "./layouts/theme-wrapper.component";

// bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <ThemeWrapper>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeWrapper>,

  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
