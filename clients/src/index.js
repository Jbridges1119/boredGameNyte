import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./App";
import AuthProvider from './pages/Login/Auth'
import theme from "./assets/theme";
import { ThemeProvider } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
ReactDOM.render(
  
  <React.StrictMode>
    <AuthProvider>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
      <App />
      </BrowserRouter>

</ThemeProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
