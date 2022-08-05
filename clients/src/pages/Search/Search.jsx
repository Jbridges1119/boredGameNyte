import { useState, useEffect } from "react";
import axios from 'axios';
import GameSearchCard from './searchComponents/GameSearchCard';
import YoutubeEmbed from "./searchComponents/YoutubeEmbed";
import { Box, Grid, TextField } from "@mui/material";
import theme from "../../assets/theme";
import '../../styles/Search.css'

const BGA_CLIENT_ID = process.env.REACT_APP_BGA_CLIENT_ID;
const apiKey = process.env.REACT_APP_YOUTUBE_API_KEY;
const youtubeApiUrl = "https://www.googleapis.com/youtube/v3/search";

const Home = () => {
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
  let gameSearchResults = data.map((game) => {
    return(
    <item>
      <GameSearchCard
      key={game.id}
      img={game.images.small}
      name={game.name}
      description={game.description}
      />
    </item>
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
    <Grid container justifyContent="center" sx={{ pt: 8, backgroundColor: theme.palette.primary.dark }}>
      <TextField sx ={{ 
        backgroundColor: theme.palette.secondary.main, 
        alignContent: "center", 
        justifyContent: "center", 
        width: "90%" 
      }}
        label="Find a game!" 
        color="primary" 
        focused />
      <Box sx={{ justifyContent: "center" }}>
        {gameSearchResults}
      </Box>
    </Grid>
   );
}
 
export default Home;