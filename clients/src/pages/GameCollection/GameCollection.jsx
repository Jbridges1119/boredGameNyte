import { useState, useEffect } from "react";
import axios from 'axios';
import { Box, Grid, Paper, TextField, Typography } from "@mui/material";
import theme from "../../assets/theme";
import '../../styles/Search.css'
import GameCollectionCard from "./GameCollectionComponents/GameCollectionCard";

const BGA_CLIENT_ID = process.env.REACT_APP_BGA_CLIENT_ID;

// *** REPLACE HARDCODED API SEARCH WITH COLLECTION DATA FROM SERVER ***

const GameCollection = (props) => {

  let gameCollectionResults = props.state.collection.map((game) => {
    return(
    <Grid item key={game.id} xs={11} sx={{p: 2}}>
      <GameCollectionCard
      gameId={game.id}
      img={game.thumbnail}
      name={game.name}
      description={game.description}
      />
    </Grid>
    )
  });

  return ( 
    <Grid container justifyContent="center" alignItems="center" sx={{ pt: 2, backgroundColor: theme.palette.primary.dark }}>
        <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Paper
              sx={{
                backgroundColor: theme.palette.primary.main,
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
   );
}
 
export default GameCollection;