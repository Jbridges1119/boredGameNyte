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
    <Box sx={{ width: "100%", backgroundColor: "white", height: "100vh" }}>
      <Box>
      <Typography pt={2}  variant="h2" >BG at Johnny's House</Typography>
      </Box>
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
          
              <Grid item xs={3}  >
               
              <NytePicture/>
            
              </Grid>
              <Grid item xs={2}>
              </Grid>

              <Grid item xs={5}>
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
              <Grid item xs={3} >
              
                <NyteStatus />
              
              </Grid>
              <Grid item xs={2}>
                
              </Grid>
              <Grid item xs={5}>
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
            <NyteGameListButtonCard />
          </Grid>
        </Grid>
      </Stack>
    </Box>
  );
};

export default NytePage;

