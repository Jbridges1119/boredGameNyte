import * as React from "react";
import Grid from "@mui/material/Grid";

import { Box,  Paper,  Stack, Typography } from "@mui/material";


import NyteDetails from './NytePageComponents/NyteDetails'
import GameCard from './NytePageComponents/GameCard'
import theme from "../../assets/theme";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";




const NytePage = () => {


  const [data, setData] = useState([])
  // const [videos, setVideos] = useState([])
  const BGA_CLIENT_ID = process.env.REACT_APP_BGA_CLIENT_ID;
  useEffect(() => {
    Promise.all([
      axios.get(`https://api.boardgameatlas.com/api/search?ids=TAAifFP590,OIXt3DmJU0&pretty=true&client_id=JLBr5npPhV`),
      axios.get(`https://api.boardgameatlas.com/api/search?ids=Dm71eMcqrp&pretty=true&client_id=${BGA_CLIENT_ID}`),
      axios.get(`https://api.boardgameatlas.com/api/search?name=Catan&client_id=JLBr5npPhV`),
    ])
        .then((all) => {
          setData(all)
          // setVideos(all[1].data.items)
        })
  }, []);


  const game = data.map((game) =>{
    return (
      <GameCard 
      key={game.data.games.id}
      img={game.data.games[0].images.large}
      name={game.data.games[0].name}
      />
    )
  })

  return (
    <Box sx={{ width: "100%", backgroundColor: theme.palette.primary.main, height: "100vh" }}>
      
     <Typography py={1.5} align="center" variant="h2">No Foolin Game Night</Typography>
    
     <Grid 
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={11}>





    <Grid container
          direction="row"
          justifyContent="center"
          alignItems="center">
          <Grid item xs={2.5}>
            <NyteDetails/>
          </Grid>
          <Grid item xs={0.5}>
            
          </Grid>
      <Grid item xs={9}>
     <Stack spacing={3}>
      {game}
     
      </Stack>
      </Grid>
      </Grid>
      </Grid>
      </Grid>
    </Box>
  );
};

export default NytePage;

