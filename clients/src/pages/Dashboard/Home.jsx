import React from "react";
import Grid from "@mui/material/Grid";
import { Stack, Box } from "@mui/material";
import ProfileCard from "./homeComponents/ProfileCard";
import FriendsListCard from "./homeComponents/FriendsListCard";
import {
  formatDate,
  formatTime,
  getGameById,
  fixDate
} from "../../helperFunctions/helperFunctions";
import { useEffect, useState } from "react";
import theme from "../../assets/theme";
import GameNyteCard from "../GameNyteList/gameNyteListComponents/GameNyteCard";
import axios from 'axios'
import {motion} from 'framer-motion'



export default function Home(props) {

  const [gameNytes, setGameNytes] = useState([]);
  const [gameNytesAttendedCount, setGameNytesAttendedCount] = useState([]);
  const [completeGameNytesHosted, setCompleteGameNytesHosted] = useState([]);
  // query to get game nights attented 
  useEffect(() => {
    axios.get(`http://localhost:3005/api/gamenytes/attended/${props.userId}`)
      .then((data) => {
        setGameNytesAttendedCount(data.data)
      })
  }, [])
  // query to get game nights for gameNytesCard
  useEffect(() => {
    axios.get(`http://localhost:3005/api/gamenytes/host/${props.userId}`)
      .then((data) => {
        setGameNytes(data.data)
      })
  }, [])
  // query to get game nights hosted for profile card
  useEffect(() => {
    axios.get(`http://localhost:3005/api/gamenytes/hosted/${props.userId}`)
      .then((data) => {
        setCompleteGameNytesHosted(data.data)
      })
  }, [])
  
  
  let gameNytesHosted = gameNytes.map((nyte) => {
    const date = formatDate(fixDate(nyte.date));
    const time = formatTime(fixDate(nyte.date));
    return (
      <GameNyteCard
        key={nyte.id}
        id={nyte.id}
        first_name={nyte.first_name}
        last_name={nyte.last_name}
        title={nyte.title}
        comp={nyte.competitive}
        status={nyte.status}
        location={nyte.location}
        date={date}
        time={time}
        game1={getGameById(props.state.collection, nyte.bgatlas_game_1)}
        game2={getGameById(props.state.collection, nyte.bgatlas_game_2) || null}
        game3={getGameById(props.state.collection, nyte.bgatlas_game_3) || null}
      />
    );
  });
  
  return (
    <motion.div  className="outer" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity: 0}}>
    <Box 
      sx={{
        mt: 2,
        width: "100%",
        height: "100%",
        backgroundColor: theme.palette.primary.dark,
      }}
    >
      <Stack>
        <Grid container direction="row" justifyContent="center">
          <Grid item xs={11}>
            <Grid container direction="row" justifyContent="center">
              <Grid item xs={5.75}>
                {props.state.user && 
                  <ProfileCard
                    state={props.state.user}
                    completeGameNytesHosted={completeGameNytesHosted}
                    gameNytesAttended={gameNytesAttendedCount}
                  />}
              </Grid>
              <Grid item xs={0.5}></Grid>
              <Grid item xs={5.75}>
                {props.state.user && <FriendsListCard state={props.state.friendsList} />}
              </Grid>
            </Grid>
            {/* Follow GameNyteCards to be replaced with mapped cards with data */}

            <Grid container justifyContent="center">
              <Grid item xs={10.25} py={1}> <motion.div  className="outer" initial={{x: -300, opacity: 0 }} animate={{x: 0, opacity: 1}} exit={{x: 300, opacity: 0}}>
                <Stack spacing={1}>
               
                  {gameNytesHosted}
                
                  </Stack>  </motion.div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Stack>
    </Box>
    </motion.div>
  );
}
