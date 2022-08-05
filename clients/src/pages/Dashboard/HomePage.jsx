import React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import { Container } from "@mui/material";
import { useEffect } from "react";
import ProfileCard from "./homeComponents/ProfileCard";

export default function HomePage(props) {
  
  // // state getter and setter for game night events
  // const [events, setEvents] = useState([]);

  // useEffect(() => {
  //   // retrieve past & future game night events
  // })

  return (
    <Container>
      <Grid container spacing={2} elevation={3}>
        <Grid item xs={6}>
          <ProfileCard />
        </Grid>
        <Grid item xs={6}>
          <Paper>Friends List</Paper>
        </Grid>
      </Grid>

      <Grid container spacing={2} elevation={3}>
        <Grid item xs={12}>
          <Paper>UPCOMING GAME NIGHT</Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper>CANCELLED GAME NIGHT</Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper>PAST GAME NIGHT</Paper>
        </Grid>
      </Grid>

      {/* <Grid container>
        <Grid item xs={12}>
          <Paper>//MAPPED GAME NIGHT EVENTS</Paper>
        </Grid>
      </Grid> */}

    </Container>
  );

};
