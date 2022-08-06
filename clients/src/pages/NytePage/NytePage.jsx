import * as React from "react";
import Grid from "@mui/material/Grid";

import { Box,  Stack } from "@mui/material";

import NyteGameListButtonCard from "./NytePageComponents/NyteGameListButtonCard";
import NyteGameListCard from "./NytePageComponents/NyteGameListCard";
import NyteAttendees from "./NytePageComponents/NyteAttendees";
import NytePicture from "./NytePageComponents/NytePicture";


import theme from "../../assets/theme";

import NyteStatus from "./NytePageComponents/NyteStatus";

const NytePage = () => {
  return (
    <Box sx={{ width: "100%", backgroundColor: theme.palette.primary.main, height: "100vh" }}>
      <h1>BG At Johnny's</h1>
      <Stack
        direction="column"
        justifyContent="space-around"
        alignItems="flex-end"
        spacing={3}
      >
        <Grid 
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={11}>
            <Stack container spacing={3}>
            <Grid
            
              container
              direction="row"
              justifyContent="flex-end"
              alignItems="center"
            >
          
              <Grid item xs={4}  >
              <NytePicture/>

              </Grid>
              <Grid item xs={3}>
              </Grid>

              <Grid item xs={5}>
                <NyteGameListCard />
              </Grid>
              
            </Grid>

            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              <Grid item xs={4} >
              
                <NyteStatus />
              
              </Grid>
              <Grid item xs={3}>
                
              </Grid>
              <Grid item xs={5}>
                <NyteAttendees />
              </Grid>
            </Grid>
            </Stack>
          </Grid>
          
        </Grid>
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

