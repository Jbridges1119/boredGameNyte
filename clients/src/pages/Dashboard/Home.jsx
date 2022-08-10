
import React from "react";
import Grid from "@mui/material/Grid";
import { Stack, Box } from "@mui/material";
import ProfileCard from "./homeComponents/ProfileCard";
import FriendsListCard from "./homeComponents/FriendsListCard";
import { formatDate, formatTime } from '../../helperFunctions/helperFunctions'

import theme from "../../assets/theme";
import GameNyteCard from "../GameNyteList/gameNyteListComponents/GameNyteCard";

export default function Home(props) {
  // // state getter and setter for game night events
  // const [events, setEvents] = useState([]);

  // useEffect(() => {
  //   // retrieve past & future game night events
  // })
  
  const gameNytesHosted = props.gameNytes.map((nyte) => {
    const date = formatDate(nyte.date)
    return(
    <GameNyteCard
      key={nyte.id}
      title={nyte.title}
      comp={nyte.competitive}
      status={nyte.status}
      location={nyte.location}
      date={date}
    />
    )
  });

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
                  
                  <ProfileCard state={props.state.user}/>
                </Grid>
                <Grid item xs={0.5}>
                
                </Grid>
                <Grid items xs={5.75}>
                  <FriendsListCard state={props.state.friendsList}/>
                </Grid>
              </Grid>
              {/* Follow GameNyteCards to be replaced with mapped cards with data */}
              
                <Grid container justifyContent="center">
                  <Grid item xs={10.25} py={1}>
                    <Stack spacing={1}>
                      {gameNytesHosted}
                      </Stack>
                  </Grid>
                </Grid>
            
            </Grid>
          </Grid>
        </Stack>
    </Box>
  );
}
