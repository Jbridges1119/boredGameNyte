// import React from "react";
import "./styles/App.css";
import { Route, Routes } from "react-router-dom";
import { motion } from "framer-motion";
import theme from "./assets/theme";
import { ThemeProvider, Box, Stack, CssBaseline } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import GameCollection from "./pages/GameCollection/GameCollection";
import Home from "./pages/Dashboard/Home";
import Layout from "./pages/Layout/Layout";
import Search from "./pages/Search/Search";
import NytePage from './pages/NytePage/NytePage'
import GameNyteList from './pages/GameNyteList/GameNytesList'
import GamePage from './pages/GamePage/GamePage'
function App() {
  return (
    <ThemeProvider theme={theme}>
                <BrowserRouter>
                  <Layout theme={theme}>
                    <Routes>
                      <Route exact path="/" element={<Home />} theme={theme}/>
                      <Route path="/search" element={<Search />} theme={theme}/>
                      <Route path="/nyte" element={<NytePage />} theme={theme}/>
                      <Route path="/gamenytes" element={<GameNyteList />} theme={theme}/>
                      <Route path="/create" element={<Home />} theme={theme}/>
                      <Route path="/collection" element={<GameCollection />} theme={theme}/>
                      <Route path="/game" element={<GamePage />} theme={theme}/>
                    </Routes>
                  </Layout>
                </BrowserRouter>
      </ThemeProvider>
  );
}

export default App;
