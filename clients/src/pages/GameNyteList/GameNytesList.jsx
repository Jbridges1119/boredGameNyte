import { useState, useEffect } from "react";
import axios from 'axios';
import GameNyteCard from './gameNyteListComponents/GameNyteCard';
import { Grid, Stack } from "@mui/material";
import theme from "../../assets/theme";
import '../../styles/GameNyteList.css'
import { Box } from "@mui/system";

const GameNyteList = () => {


  return ( 
    <Box sx={{
      width: "100%",
      height: "100%",
      backgroundColor: theme.palette.primary.dark }}>
      <Grid container 
      justifyContent="center" 
      alignItems="center" 
      sx={{ 
        pt: 2
      }}>
        <Grid item xs={11}>
          <Stack spacing={2}>
            <div>
              <h2>Upcoming Game Nytes</h2>
            </div>
            {/* Map these out from database  (if date < today or something) */}
              <GameNyteCard 
              />
            <div>
              <h2>Game Nytes You've Hosted</h2>
            </div>
            {/* Map these out from database, also */}
              <GameNyteCard 
              />
            <div>
              <h2>Game Nytes You've Attended</h2>
            </div>
              {/* Map these out from database, too */}
              <GameNyteCard
              />
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}
 
export default GameNyteList;