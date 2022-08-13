import { Box, Grid, TextField, Button, Stack, CardMedia } from "@mui/material";
import theme from "../../assets/theme";
import "../../styles/Search.css";
import useSearchData from "../../hooks/useSearchData";
import * as React from "react";
import { styled } from "@mui/material/styles";
import LoadingButton from '@mui/lab/LoadingButton';
import TypeWriter from './LoginComponents/LoginTypwriter'
import { useState } from 'react';
import { authContext } from './Auth';
import { useContext } from 'react';
import BGNLogo from '../../assets/BGN-logo-dark.png'
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

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(authContext);
  const onSubmit = function(event) {
    event.preventDefault();
    email && login(email, password);
  };

  const {  loading } = useSearchData(props);
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
  {TypeWriter}
  </Grid>
  <Grid item xs={4}>
  <Box
sx={{
  width: "350px",
  borderRadius: "20px",
  backgroundColor: theme.palette.primary.main,
  height: '350px',
  display: 'flex',
  justifyContent:'center',
  alignContent:'center',
  alignItems: 'center',
  my:1.5
  
}}
> 

<CardMedia
    
    component="img"
    image={BGNLogo}
    alt=""
    sx={{
      
      maxWidth: '350px',
      maxHeight: '200px',
      
    }}
    />


    </Box> 
<form onSubmit={onSubmit}>
<TextField
      label="Email"
      id="email"
      value={email}
      InputLabelProps={{
        style: { color: "#fff" },
      }}
      sx={{
        backgroundColor: theme.palette.secondary.main,
        borderRadius: "20px",
        alignContent: "center",
        justifyContent: "center",
        "& .MuiOutlinedInput-root:hover": {
          "& > fieldset": {
            border: "1px solid white",
          },
        },
        "& .MuiOutlinedInput-root": {
          "& > fieldset": { borderRadius: "20px", border: "2px solid white" },
        },
        width: "100%",
        outline: { color: "white" },
        input: {
          color: "white",
          border: "white",
        },
        my: 1,
      }}
      onChange={event => setEmail(event.target.value)}
    />
           <TextField
           type="password"
      label="Password"
      id="title"
      value={password}
      InputLabelProps={{
        style: { color: "#fff" },
      }}
      sx={{
        backgroundColor: theme.palette.secondary.main,
        borderRadius: "20px",
        alignContent: "center",
        justifyContent: "center",
        "& .MuiOutlinedInput-root:hover": {
          "& > fieldset": {
            border: "1px solid white",
          },
        },
        "& .MuiOutlinedInput-root": {
          "& > fieldset": { borderRadius: "20px", border: "2px solid white" },
        },
        width: "100%",
        outline: { color: "white" },
        input: {
          color: "white",
          border: "white",
        },
        my: 1,
      }}
      onChange={event => setPassword(event.target.value)}
    />        
            <LoadingButton
                  variant="contained"
                  sx={{
                    backgroundColor: theme.palette.error.main,
                    height: 50,
                    fontSize: 25,
                    borderRadius: "20px",
                    pt: 1.25,
                  }}
                  type="submit"
                  
                  
                  loading={loading}
                >
                  Login
                </LoadingButton>
          </form>
  </Grid>
  </Grid>

</Box>
   );
}
 
export default Login;

