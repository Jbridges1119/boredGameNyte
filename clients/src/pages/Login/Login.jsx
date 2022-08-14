import {
  Box,
  Grid,
  TextField,
  Button,
  Stack,
  CardMedia,
  Typography,
  Paper,
} from "@mui/material";
import theme from "../../assets/theme";
import "../../styles/Search.css";
import useSearchData from "../../hooks/useSearchData";
import * as React from "react";
import { styled } from "@mui/material/styles";
import LoadingButton from "@mui/lab/LoadingButton";
import Writer from "./LoginComponents/LoginTypwriter";
import { useState } from "react";
import { authContext } from "./Auth";
import { useContext } from "react";
import BGNLogo from "../../assets/BGN-logo-dark.png";
import "../../styles/Login.css";
import { Link } from "react-router-dom";

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
  const [buttonClass, setButtonClass] = useState("button1");
  const removeProperty = function () {
    let element = document.styleSheets[0].cssRules[0].style;
    element.removeProperty("button.button::after");
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(authContext);
  const onSubmit = function (event) {
    event.preventDefault();
    email && login(email, password);
  };

  const { loading } = useSearchData(props);
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
        <Grid item xs={7}>
          <Writer classChange={setButtonClass} />
        </Grid>

        <Grid item xs={3} sx={{ display: "flex" }}>
          <Stack spacing={8} mr={2}>
            <Paper
              sx={{
                backgroundColor: theme.palette.primary.main,
                borderRadius: "22px",
                mt: 8,
                display: "flex",
                justifyContent: "center",
              }}
              elevation={7}
            >
              <Box
                sx={{
                  width: "100%",
                  borderRadius: "20px",
                  backgroundColor: theme.palette.primary.main,
                  height: "350px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <CardMedia
                  component="img"
                  image={BGNLogo}
                  alt=""
                  sx={{
                    objectFit: "fill",
                    borderRadius: "20px",
                    maxHeight: "350px",
                  }}
                />
              </Box>
            </Paper>
            <Box>
              <form onSubmit={onSubmit}>
                <TextField
                  label="Email"
                  id="email"
                  value={email}
                  inputProps={{
                    autoComplete: "new-password",
                    form: {
                      autoComplete: "off",
                    },
                  }}
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
                      "& > fieldset": {
                        borderRadius: "20px",
                        border: "2px solid white",
                      },
                    },
                    width: "100%",
                    outline: { color: "white" },
                    input: {
                      color: "white",
                      border: "white",
                    },
                    my: 1,
                  }}
                  onChange={(event) => setEmail(event.target.value)}
                />
                <TextField
                  type="password"
                  label="Password"
                  id="title"
                  value={password}
                  inputProps={{
                    autoComplete: "new-password",
                    form: {
                      autoComplete: "off",
                    },
                  }}
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
                      "& > fieldset": {
                        borderRadius: "20px",
                        border: "2px solid white",
                      },
                    },
                    width: "100%",
                    outline: { color: "white" },
                    input: {
                      color: "white",
                      border: "white",
                    },
                    my: 1,
                  }}
                  onChange={(event) => setPassword(event.target.value)}
                />
                <Typography
                  display="inline"
                  sx={{ color: "white", display: "inline" }}
                  pl={0}
                  variant="h6"
                >
                  Don't have an account?
                  <Button
                    sx={{
                      ":hover": {
                        bgcolor: theme.palette.secondary.light, // theme.palette.primary.main
                        boxShadow: 24,
                      },
                      color: "white",
                      backgroundColor: theme.palette.secondary.main,
                      height: 28,
                      fontSize: 19,
                      textTransform: "none",
                      borderRadius: "10px",
                      pb: 0.8,
                      ml: 0.5,
                    }}
                  >
                    Register Now!
                  </Button>
                </Typography>

                <div className="wrap">
                  <button type="submit" className={buttonClass}>
                    Login
                  </button>
                </div>
              </form>
            </Box>
          </Stack>
          <Grid item xs={2}></Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Login;
