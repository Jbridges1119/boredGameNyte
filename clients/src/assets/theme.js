import { createTheme } from "@mui/material";
import {  teal, amber } from "@mui/material/colors";

const primaryColor = teal[400];
const secondaryColor = teal["A400"];
const dangerColor = amber[600];

const theme = createTheme({
  palette: {
    primary: {
      main: primaryColor,
    },
    secondary: {
      main: secondaryColor,
    },
    error: {
      main: dangerColor,
    },
  },
});


export default theme