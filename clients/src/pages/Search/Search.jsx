import { Box, Grid, TextField, Button, Stack } from "@mui/material";
import theme from "../../assets/theme";
import "../../styles/Search.css";
import useSeachData from "../../hooks/useSearchData";
import * as React from "react";
import { alpha, styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";

import InputLabel from "@mui/material/InputLabel";

import FormControl from "@mui/material/FormControl";

const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    borderBottomColor: "white",
    color: "white",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "white",
    color: "white",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderRadius: "20px",
      border: "2px solid white",
    },
    "&:hover fieldset": {
      border: "1px solid white",
      borderRadius: "20px",
    },
    "&.Mui-focused fieldset": {
      borderRadius: "20px",
      borderColor: "white",
    },
  },
});

const Search = () => {
  const { gameSearch, data, setInput, gameSearchResults } = useSeachData();

  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: theme.palette.primary.dark,
        height: "100vh",
      }}
    >
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={11}>
          <Stack >
            <Grid container justifyContent="center" alignItems="center" pt={5}>
              <Grid item xs={6}sx={{
  
  display: 'flex',
  justifyContent:'center',
  alignContent:'center',
  alignItems: 'center'
  
}}>
                <CssTextField
                  label="Find a game!"
                  id="search"
                  InputLabelProps={{
                    style: { color: "#fff" },
                  }}
                  sx={{
                    backgroundColor: theme.palette.secondary.main,
                    borderRadius: "20px",
                    alignContent: "center",
                    justifyContent: "center",
                    width: "90%",
                    input: {
                      color: "white",
                    },
                  }}
                  onChange={(event) => setInput(event.target.value)}
                />
              </Grid>
              <Grid item xs={2} sx={{
  
  display: 'flex',
  justifyContent:'center',
  alignContent:'center',
  alignItems: 'center'
  
}}>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: theme.palette.error.main,
                    height: 50,
                    fontSize: 25,
                    borderRadius: "20px",
                  }}
                  type="submit"
                  onClick={gameSearch}
                >
                  Search
                </Button>
              </Grid>
            </Grid>
            {gameSearchResults}
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Search;
