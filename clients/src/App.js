// import React from "react";
import "./styles/App.css";
import { Route, Routes } from "react-router-dom";
import { motion } from "framer-motion";
import theme from "./assets/theme";
import { ThemeProvider, Box, Stack } from "@mui/material";
import { BrowserRouter } from "react-router-dom";

import Home from "./pages/Dashboard/Home";
import Layout from "./pages/Layout/Layout";
import Search from "./pages/Dashboard/Search";

function App() {
  return (
    <ThemeProvider theme={theme}>
          <Box sx={{ height: "100%", width: "100%"}}>
            <Stack direction="row" spacing={2} justifyContent="space-between" >
            <Layout theme={theme}/>
          <BrowserRouter>
            <Routes>
              <Route exact path="/" element={<Home />} theme={theme}/>
              <Route path="/search" element={<Search />} theme={theme}/>
            </Routes>
          </BrowserRouter>
            </Stack>
          </Box>
      </ThemeProvider>
  );
}

export default App;
