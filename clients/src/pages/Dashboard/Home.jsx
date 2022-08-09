import React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import { Container, Stack, Box } from "@mui/material";
import { useEffect } from "react";
import ProfileCard from "./homeComponents/ProfileCard";
import FriendsListCard from "./homeComponents/FriendsListCard";

import theme from "../../assets/theme";
import GameNyteCard from "../GameNyteList/gameNyteListComponents/GameNyteCard";
export default function Home(props) {
  // // state getter and setter for game night events
  // const [events, setEvents] = useState([]);

  // useEffect(() => {
  //   // retrieve past & future game night events
  // })

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        backgroundColor: theme.palette.primary.dark,
      }}
    >
      <Stack
        direction="row"
        justifyContent="space-around"
        alignItems="flex-end"
        spacing={6}
      >
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={11}>
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Grid item xs={5.5}>
                <ProfileCard />
              </Grid>
              <Grid items xs={5.5}>
                <FriendsListCard />
              </Grid>
            </Grid>
            {/* Follow GameNyteCards to be replaced with mapped cards with data */}
            <div style= {{ padding: 20 }}>
              <Grid container justifyContent="center">
                <Grid item xs={10}>
                  <Paper sx={{backgroundColor: theme.palette.primary.main}} >
                    <GameNyteCard />
                  </Paper>
                </Grid>
              </Grid>
            </div>
            <div style= {{ padding: 20 }}>
              <Grid container justifyContent="center">
                <Grid item xs={10}>
                  <Paper sx={{backgroundColor: theme.palette.primary.main}} >
                    <GameNyteCard />
                  </Paper>
                </Grid>
              </Grid>
            </div>
            <div style= {{ padding: 20 }}>
              <Grid container justifyContent="center">
                <Grid item xs={10}>
                  <Paper sx={{backgroundColor: theme.palette.primary.main}} >
                    <GameNyteCard />
                  </Paper>
                </Grid>
              </Grid>
            </div>
          </Grid>
        </Grid>
      </Stack>
    </Box>
  );
}
