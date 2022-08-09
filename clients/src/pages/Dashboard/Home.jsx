
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
        mt:2,
        width: "100%",
        height: "100%",
        backgroundColor: theme.palette.primary.dark,
      }}
    >
      <Stack 
        
        
      >
        <Grid
          container
          direction="row"
          justifyContent="center"
         
        >
          <Grid item xs={11}>
            <Grid
              container
              direction="row"
              justifyContent="center"
            
            >
              <Grid item xs={5.75}>
                <ProfileCard />
              </Grid>
              <Grid item xs={0.5}>
               
              </Grid>
              <Grid items xs={5.75}>
                <FriendsListCard />
              </Grid>
            </Grid>
            {/* Follow GameNyteCards to be replaced with mapped cards with data */}
            
              <Grid container justifyContent="center">
                <Grid item xs={10.25} py={1}>
                  <Stack spacing={1}>
                    <GameNyteCard />
                 
                    <GameNyteCard />
                 
                    <GameNyteCard />
                    </Stack>
                </Grid>
              </Grid>
          
          </Grid>
        </Grid>
      </Stack>
    </Box>
  );
}
