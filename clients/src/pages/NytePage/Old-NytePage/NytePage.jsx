import * as React from "react";
import Grid from "@mui/material/Grid";

import { Box,  Stack, Typography } from "@mui/material";

import NyteGameListButtonCard from "./NytePageComponents/NyteGameListButtonCard";
import NyteGameListCard from "./NytePageComponents/NyteGameListCard";
import NyteAttendees from "./NytePageComponents/NyteAttendees";
import NytePicture from "./NytePageComponents/NytePicture";


import theme from "../../assets/theme";

import NyteStatus from "./NytePageComponents/NyteStatus";

const NytePage = () => {
  return (
    <Box sx={{ width: "100%", backgroundColor: theme.palette.primary.main, height: "100vh" }}>
     <Typography py={1.5} align="center" variant="h2">Boardgame Night At Johnny's</Typography>
      
     
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <Grid 
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={11}>
            {/* First Container Grid */}
            <Stack container spacing={2}>
            <Grid
            
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
           <Grid item xs={1}  >
               
              
               </Grid>
               
              <Grid item xs={3}  >
               {/* will need ternary operator to select comp or casual */}
              <NytePicture/>
            
              </Grid>
              <Grid item xs={2}>
              </Grid>

              <Grid item xs={5}>
                {/* will need the 3 games id from db */}
                <NyteGameListCard />
              </Grid>
              
            </Grid>
 {/* Second Container Grid */}
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
               <Grid item xs={1}  >
               
              
               </Grid>
              <Grid item xs={3} >
              {/* will need prop to determin host cancel or attende cancel/confirm */}
                <NyteStatus />
              
              </Grid>
              <Grid item xs={2}>
                
              </Grid>
              <Grid item xs={5}>
                {/* will need list of people invited */}
                <NyteAttendees />
              </Grid>
            </Grid>
            </Stack>
          </Grid>
          
        </Grid>
         {/* Bottom Container Grid */}
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={11}>
            {/* will need a 3 game ideas to set in buttons eg, array[0] */}
            <NyteGameListButtonCard />
          </Grid>
        </Grid>
      </Stack>
      
    </Box>
  );
};

export default NytePage;

