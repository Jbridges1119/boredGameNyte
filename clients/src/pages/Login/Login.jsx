import { Box, Grid, TextField, Button, Stack } from "@mui/material";
import theme from "../../assets/theme";
import "../../styles/Search.css";
import useSearchData from "../../hooks/useSearchData";
import * as React from "react";
import { styled } from "@mui/material/styles";
import LoadingButton from '@mui/lab/LoadingButton';


const CssTextField = styled(TextField)({
  "& .MuiOutlinedInput-root:hover": {
    "& > fieldset": {
      border: "1px solid white",
    },
  },
  "& .MuiOutlinedInput-root": {
    "& > fieldset": { borderRadius: "20px", border: "2px solid white" },
  },
});



const Login = (props) => {

  const { gameSearch, data, setInput, gameSearchResults, loading } = useSearchData(props);
  const handleSubmit = (e) => {
    e.preventDefault();
    gameSearch();
  };

  return ( 
    <Box
      sx={{
        width: "100%",

        height: "100vh",
      }}
    >
    <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={8}>

        </Grid>
        <Grid item xs={4}>

<form onSubmit={handleSubmit}>
                  <CssTextField
                    label="Email Address"
                    id="search"
                    InputLabelProps={{
                      style: { color: "#fff" },
                    }}
                    sx={{
                      backgroundColor: theme.palette.secondary.main,
                      borderRadius: "20px",
                      alignContent: "center",
                      justifyContent: "center",
                      width: "100%",
                      input: {
                        color: "white",
                      },
                    }}
                    onChange={(event) => setInput(event.target.value)}
                  />
                </form>


        </Grid>
        </Grid>

    </Box>
   );
}
 
export default Login;