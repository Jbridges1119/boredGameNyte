import { createTheme } from "@mui/material";


const primaryColor = '#0A3943';
const secondaryColor = '#0F6E83';
const dangerColor = '#976606';

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