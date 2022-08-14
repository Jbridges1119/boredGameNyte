import { useState, useEffect } from "react";
import axios from 'axios';
import { Box, Grid, Paper, TextField, Typography } from "@mui/material";
import theme from "../../assets/theme";
import '../../styles/Search.css'
import GameCollectionCard from "./GameCollectionComponents/GameCollectionCard";
import {motion} from 'framer-motion'
const BGA_CLIENT_ID = process.env.REACT_APP_BGA_CLIENT_ID;

// *** REPLACE HARDCODED API SEARCH WITH COLLECTION DATA FROM SERVER ***

const GameCollection = (props) => {

  let gameCollectionResults = props.state.collection.map((game) => {
    return(
    <Grid item key={game.id} xs={11} sx={{p: 2}}>
      <GameCollectionCard
      user={props.state.user}
      gameId={game.id}
      img={game.thumb_url}
      name={game.name}
      description={game.description}
      deleteGame={props.deleteGame}
      />
    </Grid>
    )
  });

  return ( 
    <motion.div exitBeforeEnter={true} className="outer" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity: 0}}>
    <Grid container justifyContent="center" alignItems="center" sx={{ pt: 2, backgroundColor: theme.palette.primary.dark }}>
        <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Paper
              sx={{
                backgroundColor: theme.palette.secondary.main,
                borderRadius: "22px",
                m: 1.5,
                pt: 0.75,
                px: 5,
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
              }}
              elevation={4}
            >
              <Typography pl={0} variant="h2">
                Your Game Collection!
              </Typography>
            </Paper>
          </Box>
        {gameCollectionResults}
    </Grid>
    </motion.div>
   );
}
 
export default GameCollection;