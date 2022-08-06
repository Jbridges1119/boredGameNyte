import { useState, useEffect } from "react";
import axios from 'axios';
import { Box, Grid, TextField } from "@mui/material";
import theme from "../../assets/theme";
import '../../styles/Search.css'
import GameCollectionCard from "./GameCollectionComponents/GameCollectionCard";

const BGA_CLIENT_ID = process.env.REACT_APP_BGA_CLIENT_ID;

// *** REPLACE HARDCODED API SEARCH WITH COLLECTION DATA FROM SERVER ***

const GameCollection = () => {
  const [data, setData] = useState([])
  // const [videos, setVideos] = useState([])

  useEffect(() => {
    Promise.all([
      axios.get(`https://api.boardgameatlas.com/api/search?name=risk&fuzzy_match=true&limit=10&client_id=${BGA_CLIENT_ID}`),
      // axios.get(`${youtubeApiUrl}?q=risk%20how%20to%20play&key=${apiKey}`)
    ])
        .then((all) => {
          setData(all[0].data.games)
          // setVideos(all[1].data.items)
        })
  }, []);

  console.log('data:', data);
  // console.log('videos:', videos);
  let gameCollectionResults = data.map((game) => {
    return(
    <Grid item xs={11} sx={{p: 2}}>
      <GameCollectionCard
      key={game.id}
      gameId={game.id}
      img={game.images.small}
      name={game.name}
      description={game.description}
      />
    </Grid>
    )
  });

  // let youtubeSearchResults = videos.map((video) => {
  //   return(
  //   <YoutubeEmbed
  //   key={video.id.videoId}
  //   embedId={video.id.videoId}
  //   />
  //   )
  // });

  return ( 
    <Grid container justifyContent="center" alignItems="center" sx={{ pt: 8, backgroundColor: theme.palette.primary.dark }}>
        {gameCollectionResults}
    </Grid>
   );
}
 
export default GameCollection;