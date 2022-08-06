// import React from "react";
import "./styles/App.css";
import { Route, Routes } from "react-router-dom";
import { motion } from "framer-motion";
import theme from "./assets/theme";
import { ThemeProvider, Box, Stack, CssBaseline } from "@mui/material";
import { BrowserRouter } from "react-router-dom";

import Home from "./pages/Dashboard/Home";
import Layout from "./pages/Layout/Layout";
import Search from "./pages/Search/Search";
import GamePage from "./pages/GamePage/GamePage"

function App() {
  return (
    <ThemeProvider theme={theme}>
              <Layout theme={theme}>
                <BrowserRouter>
                  <Routes>
                    <Route exact path="/" element={<Home />} theme={theme}/>
                    <Route path="/search" element={<Search />} theme={theme}/>
                    <Route path="/game" element={<GamePage />} theme={theme}/>
                  </Routes>
                </BrowserRouter>
              </Layout>
      </ThemeProvider>
  );
}

export default App;
