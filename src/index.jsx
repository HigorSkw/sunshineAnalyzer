import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GlobalProvider } from "./providers/indexContext";
import GlobalStyle from "./Global/global";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalProvider>
      <GlobalStyle />
      <App />
    </GlobalProvider>
  </React.StrictMode>
);
