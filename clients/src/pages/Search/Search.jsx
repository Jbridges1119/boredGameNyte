import { Box, Grid, TextField, Button, Stack } from "@mui/material";
import theme from "../../assets/theme";
import "../../styles/Search.css";
import useSearchData from "../../hooks/useSearchData";
import * as React from "react";
import { styled } from "@mui/material/styles";

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

const Search = (props) => {
  const [loading, setLoading] = React.useState(true);
  const { gameSearch, data, setInput, gameSearchResults } = useSearchData(props);
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
        <Grid item xs={11}>
          <Stack>
            {/* Search bar and button */}

            <Grid
              container
              justifyContent="center"
              alignItems="center"
              pt={4}
              pb={1}
            >
              <Grid
                item
                xs={6}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignContent: "center",
                  alignItems: "center",
                }}
              >
                <form onSubmit={handleSubmit}>
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
                      width: "100%",
                      input: {
                        color: "white",
                      },
                    }}
                    onChange={(event) => setInput(event.target.value)}
                  />
                </form>
              </Grid>
              <Grid
                item
                xs={2}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignContent: "center",
                  alignItems: "center",
                }}
              >
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
                  onClick={gameSearch}
                  loading={loading}
                >
                  Search
                </LoadingButton>
              </Grid>
            </Grid>

            {/* End of search */}
            {gameSearchResults}
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Search;
