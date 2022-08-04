import "./styles/App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Dashboard/Home";
import { motion } from "framer-motion";
import theme from "./assets/theme";
import { ThemeProvider } from "@mui/material";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
