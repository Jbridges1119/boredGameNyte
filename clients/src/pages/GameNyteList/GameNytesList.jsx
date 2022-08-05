import { useState, useEffect } from "react";
import axios from 'axios';
import GameNyteCard from './gameNyteListComponents/GameNyteCard';
import { Box, Grid, Stack, TextField } from "@mui/material";
import theme from "../../assets/theme";
import '../../styles/GameNyteList.css'

const GameNyteList = () => {


  return ( 
    <Grid container justifyContent="center" alignItems="center" sx={{ pt: 2, backgroundColor: theme.palette.primary.dark }}>
      <Stack>
        <Grid>
          <div>
            <h2>Game Nytes You've Hosted</h2>
          </div>
          <Grid item>
            {/* Map these out from database */}
            <GameNyteCard 
  
            />
          </Grid>
        </Grid>
        <Grid>
          <div>
            <h2>Game Nytes You've Attended</h2>
          </div>
          <Grid item>
            {/* Map these out from database, too */}
            <GameNyteCard 
            
            />
          </Grid>
        </Grid>
      </Stack>
    </Grid>
   );
}
 
export default GameNyteList;