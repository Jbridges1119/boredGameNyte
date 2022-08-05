import { useState, useEffect } from "react";
import { Box, Stack, Skeleton } from "@mui/material";
import axios from 'axios';
import GameCard from './homeComponents/GameCard';
import YoutubeEmbed from "./homeComponents/YoutubeEmbed";

const BGA_CLIENT_ID = process.env.REACT_APP_BGA_CLIENT_ID;
const apiKey = process.env.REACT_APP_YOUTUBE_APIKEY;
const youtubeApiUrl = "https://www.googleapis.com/youtube/v3/search";

const Home = () => {
  const [data, setData] = useState([])
  // const [videos, setVideos] = useState([])

  useEffect(() => {
    Promise.all([
      axios.get(`https://api.boardgameatlas.com/api/search?name=azul&fuzzy_match=true&limit=10&client_id=${BGA_CLIENT_ID}`)
      // axios.get(`${youtubeApiUrl}?q=azul%20how%20to%20play&key=${apiKey}`)
    ])
        .then((all) => {
          setData(all[0].data.games)
          // setVideos(all[1].data.items)
        })
  }, []);
  // const tubeVideo = videos[0].id.videoId
  console.log('data:', data);
  // console.log('videos:', videos);
  let gameSearchResults = data.map((game) => {
    return(
    <GameCard
    key={game.id}
    img={game.images.small}
    name={game.name}
    description={game.description}
    />
    )
  });

  // let youtubeSearchResults = data[1].map((video) => {
  //   return(
  //   <GameCard
  //   key={video.id}
  //   img={video.thumb}
  //   name={video.name}
  //   description={video.description}
  //   />
  //   )
  // });

  return ( 
    <Box flex={4} p={{ xs: 0, md: 2 }}>
      {/* <div className="games-container"> */}
        {gameSearchResults}
      {/* </div> */}
      <div className="videos-container">
        <YoutubeEmbed embedId="nJ-ehbVQYxI" />
      </div>
    </Box>
   );
}
 
export default Home;