// import React from "react";
import "./styles/App.css";
import { Route, Routes } from "react-router-dom";
import { motion } from "framer-motion";
import theme from "./assets/theme";
import { ThemeProvider } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import DateFnsUtils from '@date-io/date-fns';

import Home from "./pages/Dashboard/Home";
import Layout from "./pages/Layout/Layout";
import Search from "./pages/Search/Search";
import GamePage from "./pages/GamePage/GamePage"
import GameNyteList from "./pages/GameNyteList/GameNytesList";
import CreateNew from "./pages/CreateNewGameNyte/CreateNew";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <BrowserRouter>
          <Layout theme={theme}>
            <Routes>
              <Route exact path="/" element={<Home />} theme={theme}/>
              <Route path="/search" element={<Search />} theme={theme}/>
              <Route path="/game" element={<GamePage />} theme={theme}/>
              <Route path="/gamenytes" element={<GameNyteList />} theme={theme}/>
              <Route path="/create" element={<CreateNew />} theme={theme}/>
            </Routes>
          </Layout>
        </BrowserRouter>
        </MuiPickersUtilsProvider>
    </ThemeProvider>
  );
}

export default App;
