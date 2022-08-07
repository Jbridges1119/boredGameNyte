import { Box, Grid, TextField, Button } from "@mui/material";
import theme from "../../assets/theme";
import '../../styles/Search.css';
import useSeachData from "../../hooks/useSearchData";


const Search = () => {
  const {gameSearch, data, setInput, gameSearchResults} = useSeachData();

  return ( 
    <Box sx={{ width: "100%", backgroundColor: theme.palette.primary.dark, height: "100vh" }}>
      <Grid container justifyContent="center" alignItems="center" sx={{ pt: 8, backgroundColor: theme.palette.primary.dark }}>
        <Grid item xs={8}>
          <TextField id="search" sx ={{ 
            backgroundColor: theme.palette.secondary.dark, 
            alignContent: "center", 
            justifyContent: "center", 
            width: "90%" 
          }}
            label="Find a game!" 
            color="secondary" 
            focused 
            onChange={(event) => setInput(event.target.value)}/>
        </Grid>
        <Grid item>
          <Button variant="contained" size="large" type="submit" onClick={gameSearch}>Search</Button>
        </Grid>
            {gameSearchResults}
      </Grid>
    </Box>
   );
}
 
export default Search;