import * as React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { Box } from "@mui/material";

import GameListButtonCard from "./GamePageComponents/GameListButtonCard";
import GameListCard from "./GamePageComponents/GameListCard";
import GameNyteAttendees from "./GamePageComponents/GameNyteAttendees"



const GamePage = () => {
  return (
    
      <Box sx={{ width: "100%", display: 'inline-grid' }}>
        <Grid
          container
          direction="coloumn"
          justifyContent="center"
          alignItems="center"
        >

          <Grid item xs={3}>
        <GameListCard />
        </Grid>

        <Grid item xs={3}>
        <GameNyteAttendees/>
        </Grid>

        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={11}>
            <GameListButtonCard />
          </Grid>
        </Grid>
        </Grid>
        
      </Box>
    
  );
};

export default GamePage;
