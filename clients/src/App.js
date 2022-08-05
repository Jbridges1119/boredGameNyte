import React from "react";
import "./styles/App.css";
import { Route, Routes } from "react-router-dom";
import { motion } from "framer-motion";
import theme from "./assets/theme";
import { ThemeProvider, Box, Stack } from "@mui/material";
import { BrowserRouter } from "react-router-dom";

import Home from "./pages/Dashboard/Home";
import Sidebar from "./pages/Sidebar/Sidebar";
import Search from "./pages/Dashboard/Search";
import GamePage from "./pages/GamePage/GamePage"

function App() {
  return (
    <ThemeProvider theme={theme}>
    <BrowserRouter>
      
          <Box sx={{ height: "100%", width: "100%"}}>
            <Stack direction="row" spacing={2}  >
            <Sidebar />
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/search" element={<Search />} />
              <Route path="/game" element={<GamePage />} />
            </Routes>
            </Stack>
          </Box>
      
    </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
