import * as React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { Box, Card, CardActionArea, CardMedia, Stack } from "@mui/material";

import NyteGameListButtonCard from "./NytePageComponents/NyteGameListButtonCard";
import NyteGameListCard from "./NytePageComponents/NyteGameListCard";
import NyteAttendees from "./NytePageComponents/NyteAttendees";
import NytePicture from "./NytePageComponents/NytePicture";
import NyteButtons from "./NytePageComponents/NyteButtons";
import Button from "@mui/material/Button";
import theme from "../../assets/theme";
import { green } from '@mui/material/colors';
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
              <Card sx={{ maxWidth: 345 }}>
                
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          width="300"
          image="https://i.imgur.com/hHmdwtZ.png"
          alt="green iguana"
          sx={{
            display: 'flex',
            width: "20%",
            height: "20%",
            maxWidth: "300",
            maxHeight: "300"
          }}
        />
      </CardActionArea>
    </Card>

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

